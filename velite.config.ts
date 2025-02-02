import { defineConfig, s } from "velite";

export default defineConfig({
  root: "src/posts",
  collections: {
    blogPosts: {
      name: "Blog",
      pattern: "blog/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          subTitle: s.string().max(99),
          slug: s.string(),
          date: s.string(),
          // thumbnailUrl: s.string().max(99),
          body: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.slug}`,
          slug: data.slug.replaceAll("blog/", ""),
        })),
    },
  },
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  mdx: {
    // rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
  },
});
