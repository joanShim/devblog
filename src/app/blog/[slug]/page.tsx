import metadata from "@/util/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "#site/content";
import { Mdx } from "@/components/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export default function DocPage({ params }: Props) {
  const post = getPageBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="my-5 flex flex-col gap-2 ">
      <h1 className="whitespace-pre-wrap text-4xl font-black ">{post.title}</h1>
      <time className="mb-10 ml-auto mt-2 text-sm font-medium ">
        {post.date}
      </time>
      <Mdx code={post.body} />
    </div>
  );
}

function getPageBySlug(slug: string) {
  return blogPosts.find((page) => page.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getPageBySlug(params.slug);

  if (!doc) {
    return {};
  }

  return metadata({
    title: doc.title,
    description: doc.desc,
    path: doc.permalink,
    // image: `${doc.thumbnailUrl}`,
  });
}
