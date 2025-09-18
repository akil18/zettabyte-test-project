"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Home, FileText, Users } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: isOpen ? 220 : 60 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="fixed top-0 left-0 h-screen bg-gray-800 text-white flex flex-col shadow-lg z-50"
      >
        {/* Toggle button */}
        <div className="flex items-center justify-end p-1.5 border-b border-gray-700">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 focus:outline-none rounded hover:bg-gray-700 cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700"
          >
            <Home size={20} />
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Home
              </motion.span>
            )}
          </Link>

          <Link
            href="/posts"
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700"
          >
            <FileText size={20} />
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Posts
              </motion.span>
            )}
          </Link>

          <Link
            href="/users"
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700"
          >
            <Users size={20} />
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Users
              </motion.span>
            )}
          </Link>
        </nav>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
