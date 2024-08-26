import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const blog = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(blog);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await req.json();

  await prisma.post.update({
    where: {
      id: Number(id),
    },
    data,
  });

  return NextResponse.json({});
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json({});
}
