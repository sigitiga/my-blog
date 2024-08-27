"use client";

import { Editor } from "novel";

export default function Create() {
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const resp = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...Object.fromEntries(data),
          published: true,
        }),
      });

      if (!resp.ok) {
        throw new Error("Error creating blog!");
      }
      alert("Blog created!");
    } catch (error) {
      console.error(error);
      alert("Error creating blog!");
    }
  };
  return (
    <div className="container mx-auto py-8">
      <form onSubmit={submit}>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Input Title"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          {/* <textarea
            name="content"
            required
            placeholder="Input Content"
            className="textarea textarea-bordered"
          /> */}
          <Editor />
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-primary btn-wide flex">Create Post</button>
        </div>
      </form>
    </div>
  );
}
