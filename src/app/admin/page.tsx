import { createPost } from "@/actions/action";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const page = async () => {
  return (
    <main className="text-center">
      <h1>create post</h1>
      <form
        action={createPost}
        className="space-x-2 flex flex-col max-w-[400px] mx-auto gap-2 mb-3"
      >
        <input
          type="text"
          name="title"
          placeholder="Titlte for new post"
          required
          className="border rounded p-3 "
        />
        <textarea
          rows={5}
          name="body"
          className="border rounded px-3 py-3"
        ></textarea>
        <button className="p-3 bg-blue-500  rounded"> Submit</button>
      </form>
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
};

export default page;
