"use client";

import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUserStore, { fetchUsers } from "@/store/userStore";
import { ArrowUp, ChevronLeft, ChevronRight, Search } from "react-feather";

const Users = () => {
  // Use the state from Zustand store instead of local state
  const {
    users,
    total: totalUsers,
    isLoading,
    currentPage: page,
    totalPages,
    searchTerm,
    sortField,
    sortOrder,
    error,
  } = useUserStore();

  // Use setState from the store to update state
  const setState = useUserStore((state) => state.setState);

  const perPage = 10;

  // Update search term in the store
  const handleSearchChange = (e) => {
    setState({ searchTerm: e.target.value });

    // Debounce search
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      loadUsers(1, e.target.value, sortField, sortOrder);
    }, 500);
  };

  // Load users with the current parameters
  const loadUsers = async (
    pageNum = page,
    search = searchTerm,
    field = sortField,
    order = sortOrder
  ) => {
    await fetchUsers({
      page: pageNum,
      perPage,
      search,
      sortField: field,
      sortOrder: order,
    });
  };

  // Initial load
  useEffect(() => {
    loadUsers();
  }, []);

  const handleSort = (field) => {
    // Set loading state immediately to provide visual feedback
    setState({ isLoading: true });

    // Calculate new sort order
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";

    // Use setTimeout to allow the UI to update before starting the potentially heavy operation
    setTimeout(() => {
      setState({ sortField: field, sortOrder: newOrder });
      loadUsers(1, searchTerm, field, newOrder);
    }, 10);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      loadUsers(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      loadUsers(page - 1);
    }
  };

  return (
    <div className="p-5 md:p-10 bg-neutral-50 min-h-[calc(100dvh-113px)] sm:min-h-[calc(100dvh-100px)] lg:min-h-[calc(100dvh-120px)]">
      <div className="max-w-7xl mx-auto bg-neutral-0 rounded-lg shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-h3 font-heading font-bold text-neutral-900">
            Users
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="bg-brand-secondary text-brand-primary font-medium px-4 py-2 rounded-md">
              <p className="text-body-lg">Total Users: {totalUsers}</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
              <Input
                type="search"
                placeholder="Search by name, email, or phone..."
                className="text-body-lg pl-10 pr-4 py-3 h-12 w-full md:w-[350px] border-2 border-neutral-200 rounded-md placeholder:text-neutral-500 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 mb-6 text-system-error-600 bg-system-error-100 rounded-md font-medium">
            Error: {error}
          </div>
        )}

        <div className="rounded-md border-2 border-neutral-200 overflow-hidden mb-6">
          <Table>
            <TableHeader className="bg-neutral-100">
              <TableRow className="border-b-2 border-neutral-200">
                <TableHead className="py-4 text-body-lg font-semibold text-neutral-800">
                  Name
                </TableHead>
                <TableHead className="py-4 text-body-lg font-semibold text-neutral-800">
                  Email
                </TableHead>
                <TableHead className="py-4 text-body-lg font-semibold text-neutral-800">
                  Phone
                </TableHead>
                <TableHead
                  onClick={() => handleSort("created_at")}
                  className="py-4 text-body-lg font-semibold text-neutral-800 cursor-pointer hover:text-brand-primary transition-colors"
                >
                  <div className="flex items-center">
                    Contacted At
                    <ArrowUp
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ease-in-out ${
                        sortField === "created_at" && sortOrder === "desc"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                    {sortField === "created_at" && (
                      <span className="ml-1 text-body-sm font-medium text-brand-primary">
                        ({sortOrder === "asc" ? "asc" : "desc"})
                      </span>
                    )}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="min-h-[400px]">
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-[400px] p-0">
                    <div className="flex flex-col h-full">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 animate-pulse"
                        >
                          <div className="h-6 bg-neutral-200 rounded w-1/4 mr-4"></div>
                          <div className="h-6 bg-neutral-200 rounded w-1/3 mr-4"></div>
                          <div className="h-6 bg-neutral-200 rounded w-1/5 mr-4"></div>
                          <div className="h-6 bg-neutral-200 rounded w-1/6"></div>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ) : users?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center">
                    <p className="text-body-lg text-neutral-600">
                      No users found.
                    </p>
                  </TableCell>
                </TableRow>
              ) : (
                users?.map((user, index) => (
                  <TableRow
                    key={user.id}
                    className={`hover:bg-neutral-50 transition-all duration-300 ${
                      index % 2 === 0 ? "bg-neutral-0" : "bg-neutral-50"
                    }`}
                  >
                    <TableCell className="py-4 text-body-lg font-medium text-neutral-800">
                      {user.full_name}
                    </TableCell>
                    <TableCell className="py-4 text-body-lg text-neutral-700">
                      {user.email}
                    </TableCell>
                    <TableCell className="py-4 text-body-lg text-neutral-700">
                      {user.phone_number}
                    </TableCell>
                    <TableCell className="py-4 text-body-lg text-neutral-700">
                      {new Date(user.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-body-lg text-neutral-600">
            Showing {users?.length > 0 ? (page - 1) * perPage + 1 : 0} to{" "}
            {Math.min(page * perPage, totalUsers)} of {totalUsers} users
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className={`border-2 ${
                page === 1 || isLoading
                  ? "border-neutral-200 text-neutral-500"
                  : "border-brand-primary text-brand-primary hover:bg-brand-secondary"
              } rounded-md px-4 py-2 font-medium transition-colors`}
              onClick={handlePrevPage}
              disabled={page === 1 || isLoading}
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = page > 3 ? page - 3 + i + 1 : i + 1;
                if (pageNum <= totalPages) {
                  return (
                    <Button
                      key={pageNum}
                      variant={pageNum === page ? "default" : "outline"}
                      className={`h-10 w-10 p-0 ${
                        pageNum === page
                          ? "bg-brand-primary text-white"
                          : "border-2 border-neutral-200 text-neutral-700 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary"
                      } rounded-md font-medium`}
                      onClick={() => loadUsers(pageNum)}
                      disabled={isLoading}
                    >
                      {pageNum}
                    </Button>
                  );
                }
                return null;
              })}
              {page + 2 < totalPages && (
                <span className="text-neutral-600 px-1">...</span>
              )}
            </div>
            <Button
              variant="outline"
              className={`border-2 ${
                page >= totalPages || isLoading
                  ? "border-neutral-200 text-neutral-500"
                  : "border-brand-primary text-brand-primary hover:bg-brand-secondary"
              } rounded-md px-4 py-2 font-medium transition-colors`}
              onClick={handleNextPage}
              disabled={page >= totalPages || isLoading}
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
