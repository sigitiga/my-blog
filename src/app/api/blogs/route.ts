import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(blogs);
}
export async function POST(req: Request) {
  const data = await req.json();

  await prisma.post.create({
    data,
  });
  return NextResponse.json({});
}
