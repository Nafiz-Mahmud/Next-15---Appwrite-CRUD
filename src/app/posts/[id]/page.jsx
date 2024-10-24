import Link from "next/link";
import { Suspense } from "react";
import SinglePostRender from "@/components/singlePostRender";
export default async function SinglePostPage({ params }) {
  const { id } = await params;
  return (
    <div className="single_post_page">
      <h1 className="font-bold text-4xl pt-[1rem] text-center text-gray-400">
        Welcome to Next.js Single Post Page!
      </h1>
      <h1 className="font-bold text-4xl pt-[1rem] text-center text-green-400">
        Post ID : {id}
      </h1>

      <Suspense
        fallback={
          <div className="font-bold text-4xl pt-[1rem] text-center text-gray-300">
            Loading...
          </div>
        }
      >
        <SinglePostRender id={id} />
      </Suspense>
    </div>
  );
}
