"use client";
import { useActionState } from "react";
import { addPost } from "@/actions";
import AddPostStatus from "./addPostStatus";
export default function AddPost() {
  const [status, addPostAction] = useActionState(addPost, {});
  return (
    <div className="add_post w-[80%] m-auto text-center mt-[2rem]">
      <form action={addPostAction}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="outline-none bg-gray-200 p-[.5rem] mr-[1rem] w-[50%]"
        />
        {status && (
          <p className="text-red-500 mt-[.5rem] font-bold">{status.message}</p>
        )}
        <AddPostStatus />
      </form>
    </div>
  );
}
