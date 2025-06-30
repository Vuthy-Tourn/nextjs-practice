"use client";
import { BlogType } from "@/types/BlogType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { use } from "react";

export default function BlogCard({ blogs }: { blogs: Promise<BlogType[]> }) {
  const allBlogs = use(blogs);

  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4 max-w-7xl mx-auto">
      {allBlogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          {/* Post Header */}
          <div className="flex items-center justify-between p-3 insta-border">
            <div className="flex items-center space-x-3">
              <Image
                className="w-8 h-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
                alt="User Avatar"
                width={20}
                height={20}
                unoptimized
              />
              <span className="text-sm font-semibold text-gray-900">
                username_here
              </span>
            </div>
            <button aria-label="More options" className="text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
          </div>

          {/* Post Image */}
          <div>
            <Image
              className="w-full object-cover"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Post Content"
              width={20}
              height={20}
              unoptimized
            />
          </div>

          {/* Post Actions */}
          <div className="flex justify-between items-center p-4">
            <div className="flex space-x-4">
              <button
                aria-label="Like post"
                className="text-gray-900 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Comment on post"
                className="text-gray-900 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8.2881437,19.1950792 C8.38869181,19.1783212 8.49195996,19.1926955 8.58410926,19.2362761 C9.64260561,19.7368747 10.8021412,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,13.7069096 4.53528582,15.3318588 5.51454846,16.6849571 C5.62010923,16.830816 5.63909672,17.022166 5.5642591,17.1859256 L4.34581002,19.8521348 L8.2881437,19.1950792 Z M3.58219949,20.993197 C3.18698783,21.0590656 2.87870208,20.6565881 3.04523765,20.2921751 L4.53592782,17.0302482 C3.54143337,15.5576047 3,13.818993 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C10.707529,21 9.4528641,20.727055 8.30053434,20.2068078 L3.58219949,20.993197 Z"
                  />
                </svg>
              </button>
              <button
                aria-label="Share post"
                className="text-gray-900 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M20 13V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V13M12 3L12 15M12 3L16 7M12 3L8 7"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button
              aria-label="Save post"
              className="text-gray-900 hover:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Likes Count */}
          <div className="px-4 pb-2">
            <p className="text-sm font-semibold text-gray-900">
              {blog.reactions.likes} likes
            </p>
          </div>

          {/* Caption */}
          <div className="px-4 pb-2">
            <h5 className="font-semibold hover:underline line-clamp-1 text-gray-900">
              {blog.title}
            </h5>
            <p className="text-sm line-clamp-3 text-gray-900">
              {blog.body} #coding #tailwindcss #webdev
            </p>
          </div>

          {/* View Comments */}

          <Link
            href="#"
            className="text-sm text-gray-500 dark:text-gray-400 hover:underline px-4 pb-2"
          >
            View all {blog.views} comments
          </Link>

          {/* Add Comment */}
          <div className="px-4 pb-4 border-t insta-border mt-2 pt-3">
            <div className="flex items-center space-x-3">
              <Image
                className="w-7 h-7 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
                alt="Your Avatar"
                width={20}
                height={20}
                unoptimized
              />
              <p className="text-sm text-gray-400 dark:text-gray-500 flex-grow">
                Add a comment...
              </p>
              <button className="text-sm font-semibold text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 opacity-50 cursor-not-allowed">
                Post
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
