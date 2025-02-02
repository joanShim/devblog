import { Post } from "@/types/Post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const BLOG_DIR = join(process.cwd(), "src/posts/blog");

export const getPostBySlug = (slug: string): Post | null => {
  try {
    // src/blog/[slug].mdx 형태의 전체 경로 생성
    const fullPath = join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      console.warn(`Post not found: ${slug}`);
      return null;
    }

    // 파일 내용 읽기
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // frontmatter 타입 검증
    if (!data.title || !data.date) {
      console.warn(`Invalid frontmatter for post: ${slug}`);
      return null;
    }

    return {
      id: slug,
      tag: data.tag || "uncategorized",
      slug: slug,
      content,
      title: data.title,
      description: data.description || "",
      postTag: Array.isArray(data.postTag) ? data.postTag : [],
      subTitle: data.subTitle || "",
      date: new Date(data.date).toISOString(),
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
};

/**
 * 모든 포스트를 가져오는 함수
 */
export const getPosts = (): Post[] => {
  try {
    // blog 디렉토리가 없으면 빈 배열 반환
    if (!fs.existsSync(BLOG_DIR)) {
      console.warn("Blog directory does not exist");
      return [];
    }

    // MDX 파일 목록 가져오기
    const files = fs
      .readdirSync(BLOG_DIR)
      .filter((filename) => filename.endsWith(".mdx"));

    // 각 파일을 Post 객체로 변환
    const posts = files
      .map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        return getPostBySlug(slug);
      })
      .filter((post): post is Post => post !== null); // null 값 필터링

    // 날짜순 정렬
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
};
