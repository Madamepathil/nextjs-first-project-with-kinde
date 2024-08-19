import UpvoteBtn from "@/components/UpvoteBtn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!data) {
    notFound();
  }
  return (
    <main className="text-center pt-24">
      <h1 className="text-5xl mb-5">{data.title}</h1>
      <p className="max-w-[700px] mx-auto">{data.body}</p>

      <UpvoteBtn />
    </main>
  );
};

export default page;
