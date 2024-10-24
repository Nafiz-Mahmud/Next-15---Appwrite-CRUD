import Link from "next/link";
export default function Nav() {
  return (
    <div className="w-[90%] m-auto flex pr-[5rem] justify-between items-center mt-[1rem] text-2xl font-bold">
      <Link href="/">Next 15 App</Link>
      <div className="links flex gap-[5rem] justify-between">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/write">Write</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">Profile</Link>
        <Link href="/about">LogIn</Link>
      </div>
    </div>
  );
}
