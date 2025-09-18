"use client";

import { useState, useRef, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { CircleUser } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    console.log("Session data:", session);
  }, [session]);

  return (
    <header className="fixed top-0 left-0 w-full text-white shadow-md">
      <div className="flex justify-end items-center p-4">
        <div className="relative" ref={menuRef}>
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium cursor-pointer"
            >
              Login
            </button>
          ) : (
            <>
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 focus:outline-none cursor-pointer"
              >
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ) : (
                  <CircleUser />
                )}
                <span className="hidden sm:inline">{session.user?.name}</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg overflow-hidden">
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left text-red-500 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
