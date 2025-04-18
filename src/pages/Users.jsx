import React, { useEffect, useState } from "react";
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
import useContactStore, { getUsers } from "@/store/ContactStore";
import { useDebounce } from "@/hooks/use-debounce";

const Users = () => {
  const users = useContactStore((state) => state.users) || [];
  const pagination = useContactStore((state) => state.pagination);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const fetchUsers = async (page = 1, searchValue = debouncedSearch) => {
    await getUsers({ page, limit: pagination.limit, search: searchValue });
  };

  useEffect(() => {
    fetchUsers(1, debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    fetchUsers(pagination.page);
  }, [pagination.page]);

  const handlePageChange = (nextPage) => {
    if (nextPage > 0 && nextPage <= pagination.totalPages) {
      fetchUsers(nextPage);
    }
  };

  return (
    <>
      <div className="p-4 md:p-20 h-[calc(100dvh-113px)] sm:h-[calc(100dvh-100px)] lg:h-[calc(100dvh-120px)] ">
        <span className="w-full flex text-h4 font-heading pb-4 text-neutral-800">
          Users
        </span>
        <div className="mb-4 w-full md:w-1/3">
          <Input
            type="text"
            className="bg-brand-secondary"
            placeholder="Search by name, email, or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Table className="border border-brand-secondary shadow-lg">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Destinations</TableHead>
              <TableHead>Exam</TableHead>
              <TableHead>Intake</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.full_name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{`${user.country_code} ${user.phone_number}`}</TableCell>
                  <TableCell>{user.destinations}</TableCell>
                  <TableCell>{user.exam_type}</TableCell>
                  <TableCell>{user.intake}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>No users found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Users;
