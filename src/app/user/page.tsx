"use client";
import UserCard from "@/components/user/UserCard";
import { UserType } from "@/types/UserType";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [users, setUsers] = useState<UserType[]>([]);
  const [filter, setFilter] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const search = searchParams.get("search") || "";
    setSearchTerm(search);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}users`)
      .then((response) => response.json())
      .then((data) => {
        const userList = data.users || data
        setUsers(userList)
        const result = searchTerm
          ? users.filter(
              (user) =>
                user.firstName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                user.lastName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            )
          : userList;
        setFilter(result);
      })
      .catch((error) => console.error("Error fetching users:", error));
  },[searchParams,searchTerm,users]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
      setSearchTerm(value);
    router.push(`/user?search=${value}`);
  }

  return (
    <section className="min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          User Profiles
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
          Explore user profiles and connect with the community.
        </p>
      </div>
      <div className="relative">
        <input
          className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 dark:text-white leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
          id="username"
          type="text"
          value={searchTerm}
          onChange={onChange}
          placeholder="Search..."
        />
        <div className="absolute right-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {/* <!-- User Grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {filter.map((user) => (
          <Link
            href={`/user/${user.id}`}
            className="no-underline"
            key={user.id}
          >
            <UserCard
              id={user.id}
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              role={user.role}
              image={user.image}
              university={user.university}
              email={user.email}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
