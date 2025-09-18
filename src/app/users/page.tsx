"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import UserModal from "@/components/UserModal";
import Spinner from "@/components/Spinner";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { street: string; city: string };
};

export default function UsersPage() {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <Spinner />;
  if (error)
    return <p className="text-red-500 font-semibold p-4">Error: {error}</p>;

  return (
    <main className="p-6 mt-16">
      <table className="min-w-full bg-white border rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-2 px-4 text-gray-600">Name</th>
            <th className="text-left py-2 px-4 text-gray-600">Email</th>
            <th className="text-left py-2 px-4 text-gray-600">Company</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr
              key={user.id}
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => setSelectedUser(user)}
            >
              <td className="py-2 px-4 text-gray-600">{user.name}</td>
              <td className="py-2 px-4 text-gray-600">{user.email}</td>
              <td className="py-2 px-4 text-gray-600">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </main>
  );
}
