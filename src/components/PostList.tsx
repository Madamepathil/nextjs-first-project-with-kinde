import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

const PostList = async () => {
  const data = await prisma.post.findMany();
  return (
    <ul className="text-center">
      {data.map((post) => (
        <li className="mb-3" key={post.id}>
          <Link href={`/posts/${post.id}`}> {post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
