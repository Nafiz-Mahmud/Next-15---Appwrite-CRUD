"use client";
import { useFormStatus } from "react-dom";
export default function AddPostStatus() {
  const { pending } = useFormStatus();
  return (
    <div className="addpost_status">
      <button
        disabled={pending}
        type="submit"
        className="p-[.5rem] mt-[1rem] bg-green-400"
        style={{ backgroundColor: pending ? "green" : "lightgreen" }}
      >
        {pending ? "Adding..." : "Add"} Post
      </button>
    </div>
  );
}
