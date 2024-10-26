import Link from "next/link";
import { getPosts, getPostsWithCache } from "@/actions";
import { deletePost } from "@/actions";
import DeletePostStatus from "./deletePostStatus";
export default async function AllPostRender() {
  const posts = await getPosts();
  // const posts = await getPostsWithCache();

  return (
    <div className="all_posts_render">
      {posts.documents.map((post, index) => (
        <div key={post.$id} className="m-auto text-center">
          <Link href={`/posts/${post.$id}`}>
            <button className="hover:text-blue-700 text-2xl pt-[2rem] underline">
              {index + 1}. {post.title}
            </button>
          </Link>
          <form action={deletePost.bind(null, post.$id)}>
            <DeletePostStatus />
          </form>
        </div>
      ))}
    </div>
  );
}
