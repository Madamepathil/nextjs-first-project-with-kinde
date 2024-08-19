import PostList from "@/components/PostList";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-5 md:text-4xl text-center pt-32">
        All post
      </h1>
      <Suspense fallback="loading...">
        <PostList />
      </Suspense>
    </main>
  );
};

export default page;
