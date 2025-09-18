"use client";

import Card from "@/components/Card";
import { useFetch } from "@/hooks/useFetch";
import Spinner from "@/components/Spinner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

export default function PostsPage() {
  const [simulateError, setSimulateError] = useState(false);

  const url = simulateError
    ? "https://jsonplaceholder.typicode.com/invalid-posts" // invalid URL to simulate error
    : "https://jsonplaceholder.typicode.com/posts"; // valid URL

  const { data, loading, error, refetch } = useFetch<Post[]>(url);

  const handleToggleSimulation = () => {
    setSimulateError((prev) => !prev);
  };

  useEffect(() => {
    console.log("Simulate Error:", simulateError);
    refetch();
  }, [simulateError]);

  if (loading) return <Spinner />;

  return (
    <main className="p-6 mt-16">
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={handleToggleSimulation}
          className={`px-4 py-2 rounded text-white cursor-pointer ${
            simulateError
              ? "bg-gray-600 hover:bg-gray-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {simulateError ? "Stop Simulation" : "Simulate Error"}
        </button>

        {error && (
          <p className="text-red-500 font-semibold">Failed to load posts</p>
        )}
      </div>

      {!error && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {data?.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card id={post.id} title={post.title} body={post.body} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </main>
  );
}
