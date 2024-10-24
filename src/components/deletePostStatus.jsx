"use client";
import { useFormStatus } from "react-dom";
export default function DeletePostStatus() {
  const { pending } = useFormStatus();
  return (
    <div className="delete_post_status">
      <button
        disabled={pending}
        type="submit"
        className="p-[.5rem] mt-[.5rem]"
        style={{ backgroundColor: pending ? "red" : "coral" }}
      >
        {pending ? "Deleting..." : "Delete"} This Post
      </button>
    </div>
  );
}
