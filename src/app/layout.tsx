"use client";

import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <html lang="en">
      <body className="flex bg-gray-900">
        {/* Layout UI */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <SessionProvider>
          <main
            className={`transition-all duration-500`}
            style={{ marginLeft: sidebarOpen ? 220 : 60 }}
          >
            <Header />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
