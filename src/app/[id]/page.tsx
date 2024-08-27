"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Details() {
  const params = useParams();
  const [post, setPost] = useState<{
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }>();

  useEffect(() => {
    fetch(`/api/blogs/${params.id}`)
      .then((res) => res.json())
      .then(setPost);
  }, [params.id]);

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-2 items-center">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </Link>
      </div>
      <h2 className="text-lg font-bold">{post?.title}</h2>
      <div className="prose">
        <p>{post?.content}</p>
      </div>
    </div>
  );
}
