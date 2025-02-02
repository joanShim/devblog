import { PostListItem } from "@/components/home/RecentPosts";
import PageLayout from "@/components/layout/PageLayout";
import { getPosts } from "@/util/getPosts";
import React from "react";

export default function Blog() {
  const posts = getPosts();
  console.log(posts);
  return (
    <PageLayout>
      <ul>
        {posts &&
          posts.map((post) => <PostListItem key={post.id} post={post} />)}
      </ul>
    </PageLayout>
  );
}
