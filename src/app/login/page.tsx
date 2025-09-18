"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="p-8">
      {!session ? (
        <>
          <h1 className="text-2xl mb-4">Welcome</h1>
          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl mb-4">Hello {session.user?.name}</h1>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Sign out
          </button>
        </>
      )}
    </main>
  );
}
