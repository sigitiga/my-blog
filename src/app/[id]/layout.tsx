import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const resp = await fetch(`http://localhost:3000/api/blogs/${id}`);
  const blog = await resp.json();
  return {
    title: blog.title,
    description: blog.content,
    authors: [{ name: "Sigit", url: "https://sigit.cc" }],
    openGraph: {},
    twitter: {},
  };
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
