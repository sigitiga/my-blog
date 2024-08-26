"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<
    { id: number; title: string; content: string; createdAt: string }[]
  >([]);
  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <div className=" container mx-auto min-h-screen">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="card bordered mb-4 hover:cursor hover:shadow-md"
          onClick={() => router.push(`/${blog.id}`)}
        >
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>{blog.content}</p>
            <p className="text-xs text-gray-500">
              {dayjs(blog.createdAt).format("YYYY MM DD")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
