import { Post } from "@/types/Post";
import dayjs from "dayjs";
import Link from "next/link";
import { useMemo } from "react";
type RecentPosts = {
  posts: Post[];
};

export function RecentPosts(posts: RecentPosts) {
  const sortedPosts = useMemo(() => {
    return posts.posts
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [posts]);

  return (
    <section className="mt-10">
      <h2 className="mb-2 text-2xl font-extrabold">최근 게시글</h2>
      <ul className="w-full">
        {sortedPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

export function PostListItem({ post }: { post: Post }) {
  const { id, title, date, subTitle, tag } = post;
  return (
    <li>
      <Link
        className="block border-b px-2 py-4 text-zinc-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-[#242424] dark:active:bg-[#222]"
        href={`/blog/${id}`}
        passHref
      >
        <div className="break-keeps truncate text-lg font-bold">{title}</div>
        <div className="truncate pt-2 text-sm opacity-80">
          {subTitle ? `# ${subTitle}` : ``}
        </div>
        <span className="block pt-2 text-xs text-gray-500">
          {dayjs(date).format("YYYY. MM. DD")}
        </span>
      </Link>
    </li>
  );
}
