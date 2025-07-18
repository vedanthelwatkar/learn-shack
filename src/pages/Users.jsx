"use client";

import { useEffect, useState } from "react";
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
import {
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Search,
  Lock,
  User,
  Eye,
  EyeOff,
} from "react-feather";

const destinations = [
  { id: "uk", label: "UK" },
  { id: "ireland", label: "Ireland" },
  { id: "usa", label: "USA" },
  { id: "germany", label: "Germany" },
  { id: "canada", label: "Canada" },
  { id: "australia", label: "Australia" },
  { id: "newZealand", label: "New Zealand" },
  { id: "others", label: "Others" },
];

const intakeOptions = [
  { id: "2025", label: "2025" },
  { id: "2026", label: "2026" },
  { id: "2027+", label: "2027 & Later" },
  { id: "notDecided", label: "Not Decided" },
];

const examOptions = [
  { id: "ielts", label: "IELTS" },
  { id: "gmat", label: "GMAT" },
  { id: "gre", label: "GRE" },
  { id: "toefl", label: "TOEFL" },
  { id: "pte", label: "PTE" },
  { id: "duolingo", label: "Duo Lingo" },
  { id: "none", label: "None" },
];

const mapLabel = (list, id) => list.find((item) => item.id === id)?.label || id;
const mapCommaSeparatedLabels = (list, ids) =>
  ids
    .split(",")
    .map((id) => mapLabel(list, id.trim()))
    .join(", ");

const AUTH_USERNAME = import.meta.env.VITE_AUTH_USERNAME;
const AUTH_PASSWORD = import.meta.env.VITE_AUTH_PASSWORD;
const AUTH_KEY = import.meta.env.VITE_AUTH_KEY;

const Users = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const setState = useUserStore((state) => state.setState);
  const perPage = 10;

  useEffect(() => {
    const authStatus = sessionStorage.getItem(AUTH_KEY);
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadUsers();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    if (username === AUTH_USERNAME && password === AUTH_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  const handleSearchChange = (e) => {
    setState({ searchTerm: e.target.value });
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      loadUsers(1, e.target.value, sortField, sortOrder);
    }, 500);
  };

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

  const handleSort = (field) => {
    setState({ isLoading: true });
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setTimeout(() => {
      setState({ sortField: field, sortOrder: newOrder });
      loadUsers(1, searchTerm, field, newOrder);
    }, 10);
  };

  const handleNextPage = () => {
    if (page < totalPages) loadUsers(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) loadUsers(page - 1);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100dvh-96px)] sm:min-h-[calc(100dvh-100px)] lg:min-h-[calc(100dvh-120px)] bg-neutral-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm border-2 mx-4 sm:mx-0">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-brand-primary" />
            </div>
            <h1 className="text-2xl font-bold font-heading">Login</h1>
            <p className="text-neutral-600 mt-2">
              Enter your credentials to access user data
            </p>
          </div>

          {loginError && (
            <div className="p-4 mb-6 text-red-600 bg-red-100 rounded-md">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 font-medium">
                Username
              </label>
              <div className="relative">
                <User className="absolute h-4 left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 w-full"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 h-4 top-1/2 transform -translate-y-1/2 text-neutral-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 w-full"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                >
                  {showPassword ? (
                    <Eye className="h-4" />
                  ) : (
                    <EyeOff className="h-4" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-brand-primary">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 bg-neutral-50 min-h-[calc(100dvh-96px)] sm:min-h-[calc(100dvh-100px)] lg:min-h-[calc(100dvh-120px)] ">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-h3 font-heading font-bold text-neutral-900">
              Users
            </h2>
            <Button
              onClick={handleLogout}
              className="md:hidden bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </Button>
          </div>
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
            <Button
              onClick={handleLogout}
              className="hidden md:block bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </Button>
          </div>
        </div>

        {error && (
          <div className="p-4 mb-6 text-system-error-600 bg-system-error-100 rounded-md font-medium">
            Error: {error}
          </div>
        )}

        <div className="rounded-md border-2 border-neutral-200 overflow-auto mb-6">
          <Table>
            <TableHeader className="bg-neutral-100">
              <TableRow className="border-b-2 border-neutral-200">
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Intake</TableHead>
                <TableHead>Exam Type</TableHead>
                <TableHead>Destinations</TableHead>
                <TableHead
                  onClick={() => handleSort("created_at")}
                  className="cursor-pointer hover:text-brand-primary transition-colors"
                >
                  <div className="flex items-center">
                    Contacted At
                    <ArrowUp
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                        sortField === "created_at" && sortOrder === "desc"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                    {sortField === "created_at" && (
                      <span className="ml-1 text-body-sm font-medium text-brand-primary">
                        ({sortOrder})
                      </span>
                    )}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="min-h-[400px]">
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-[400px] p-0">
                    <div className="flex flex-col h-full">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 animate-pulse"
                        >
                          <div className="h-6 bg-neutral-200 rounded w-1/6 mr-4" />
                          <div className="h-6 bg-neutral-200 rounded w-1/6 mr-4" />
                          <div className="h-6 bg-neutral-200 rounded w-1/6 mr-4" />
                          <div className="h-6 bg-neutral-200 rounded w-1/6" />
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ) : users?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-32 text-center">
                    <p className="text-body-lg text-neutral-600">
                      No users found.
                    </p>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user, index) => (
                  <TableRow
                    key={user.id}
                    className={`hover:bg-neutral-50 ${
                      index % 2 === 0 ? "bg-neutral-0" : "bg-neutral-50"
                    }`}
                  >
                    <TableCell>{user.full_name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.country_code} {user.phone_number}
                    </TableCell>
                    <TableCell>
                      {mapLabel(intakeOptions, user.intake)}
                    </TableCell>
                    <TableCell>
                      {mapLabel(examOptions, user.exam_type)}
                    </TableCell>
                    <TableCell>
                      {mapCommaSeparatedLabels(destinations, user.destinations)}
                    </TableCell>
                    <TableCell>
                      {new Date(user.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
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
              onClick={handlePrevPage}
              disabled={page === 1 || isLoading}
              className={`border-2 ${
                page === 1 || isLoading
                  ? "border-neutral-200 text-neutral-500"
                  : "border-brand-primary text-brand-primary hover:bg-brand-secondary"
              } rounded-md px-4 py-2 font-medium transition-colors`}
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
                      onClick={() => loadUsers(pageNum)}
                      disabled={isLoading}
                      className={`h-10 w-10 p-0 ${
                        pageNum === page
                          ? "bg-brand-primary text-white"
                          : "border-2 border-neutral-200 text-neutral-700 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary"
                      } rounded-md font-medium`}
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
              onClick={handleNextPage}
              disabled={page >= totalPages || isLoading}
              className={`border-2 ${
                page >= totalPages || isLoading
                  ? "border-neutral-200 text-neutral-500"
                  : "border-brand-primary text-brand-primary hover:bg-brand-secondary"
              }`}
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
