import { Suspense } from "react";
import AllPostsRender from "@/components/allPostsRender";
import AddPost from "@/components/addPost";
export default async function PostsPage() {
  return (
    <div className="posts_page">
      <h1 className="font-bold text-4xl pt-[1rem] text-center text-blue-400">
        Welcome to Next.js Posts Page!
      </h1>
      <AddPost />
      <Suspense
        fallback={
          <div className="font-bold text-4xl pt-[1rem] text-center text-gray-300">
            Loading...
          </div>
        }
      >
        <AllPostsRender />
      </Suspense>
    </div>
  );
}
