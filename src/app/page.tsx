import About from "@/components/home/About";
import { RecentPosts } from "@/components/home/RecentPosts";
import PageLayout from "@/components/layout/PageLayout";
import { getPosts } from "@/util/getPosts";

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <PageLayout>
      <About />
      <RecentPosts posts={posts} />
    </PageLayout>
  );
}
