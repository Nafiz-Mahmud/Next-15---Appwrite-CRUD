import { getPost, deletePost } from "@/actions";
import DeletePostStatus from "./deletePostStatus";
export default async function SinglePostRender({ id }) {
  const post = await getPost(id);
  return (
    <div className="single_post_render text-center text-2xl font-bold pt-[2rem]">
      <h1>Title : {post.title}</h1>

      <form action={deletePost.bind(null, post.$id)}>
        <DeletePostStatus />
      </form>
    </div>
  );
}
