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
          Back
        </Link>
      </div>
      <h2 className="text-lg font-bold">{post?.title}</h2>
      <div className="prose">
        <p>{post?.content}</p>
      </div>
    </div>
  );
}
