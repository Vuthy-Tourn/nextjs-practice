"use client";
import Loading from "@/app/loading";
import { UserType } from "@/types/UserType";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// Handle edit/delete
const handleEdit = (id: number) => {
  console.log("Edit user:", id);
  // Navigate or open modal...
};

const handleDelete = (id: number) => {
  console.log("Delete user:", id);
  // Show confirmation or delete logic...
};

const columns: TableColumn<UserType>[] = [
  {
    name: "Image",
    cell: (row: UserType) => (
      <Image
        src={row.image}
        alt={row.firstName + " " + row.lastName}
        width={50}
        height={50}
        unoptimized
      />
    ),
    width: "130px",
    sortable: true,
  },
  {
    name: "Full Name",
    selector: (row: UserType) => row.firstName + " " + row.lastName,
    width: "150px",
    sortable: true,
  },
  {
    name: "Role",
    selector: (row: UserType) => row.role,
    sortable: true,
  },
  {
    name: "University",
    selector: (row: UserType) => row.university,
  },
  {
    name: "Email",
    selector: (row: UserType) => row.email,
    sortable: true,
    width: "200px",
  },
  {
    name: "Actions",
    cell: (row) => (
      <div className="flex gap-2">
        <button
          onClick={() => handleEdit(row.id)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(row.id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    ),
  },
];

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<UserType[]>([]);
  const [filterUsers, setFilteredUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}users`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data.users);
        setFilteredUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  if (loading) {
    return (
      <Loading/>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-100 rounded">Error: {error}</div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 mt-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={loading}
      />

      <DataTable
        title="Users List"
        columns={columns}
        data={filterUsers}
        selectableRows
        pagination
        progressPending={loading}
        progressComponent={<div className="py-4">Loading data...</div>}
        noDataComponent={
          <div className="py-4">
            {search ? "No matching users found" : "No users available"}
          </div>
        }
      />
    </div>
  );
}
