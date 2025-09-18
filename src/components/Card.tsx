"use client";

import Link from "next/link";

type CardProps = {
  id: number;
  title: string;
  body: string;
};

export default function Card({ id, title, body }: CardProps) {
  return (
    <div className="border rounded-lg p-4 h-36 flex flex-col justify-between bg-black text-white">
      <div>
        <h2 className="font-bold text-lg mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-400 text-sm line-clamp-2">{body}</p>
      </div>
      <Link
        href={`/posts/${id}`}
        className="text-blue-400 mt-2 text-sm hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}
