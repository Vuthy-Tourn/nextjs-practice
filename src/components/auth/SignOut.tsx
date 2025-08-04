"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div className="space-x-2">
      <button
        className="  px-4 py-2 rounded cursor-pointer"
        onClick={() => signOut()}
      >
        <LogOut />
      </button>
    </div>
  );
}
