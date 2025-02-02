import { ComponentPropsWithRef } from "react";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/util/utils";
import { getSingletonHighlighter, type Highlighter } from "shiki";

interface CodeBlockProps extends ComponentPropsWithRef<"pre"> {
  children: string;
  language: string;
}

export async function CodeBlock({
  children,
  language,
  className,
  ...props
}: CodeBlockProps) {
  const highlighter = await shikiService.getHighlighter();

  // 언어가 지원되지 않는 경우 plain text로 폴백
  const normalizedLang = language.split(":")[0];
  const supportedLang = highlighter
    .getLoadedLanguages()
    .includes(normalizedLang as any)
    ? normalizedLang
    : "text";

  const hast = await highlighter.codeToHast(children, {
    lang: supportedLang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ children, className: preClassName, ...preProps }) => (
        <pre
          className={cn(
            "relative my-4 overflow-x-auto rounded-lg p-4",
            "bg-gray-50 dark:bg-gray-900",
            className,
            preClassName,
          )}
          {...preProps}
          {...props}
        >
          {children}
        </pre>
      ),
      code: ({ children, className: codeClassName, ...codeProps }) => (
        <code
          className={cn("block font-mono text-sm", codeClassName)}
          {...codeProps}
        >
          {children}
        </code>
      ),
    },
  }) as JSX.Element;
}
class ShikiService {
  private static instance: ShikiService;
  private highlighter: Highlighter | null = null;
  private initPromise: Promise<Highlighter> | null = null;

  private constructor() {}

  public static getInstance(): ShikiService {
    if (!ShikiService.instance) {
      ShikiService.instance = new ShikiService();
    }
    return ShikiService.instance;
  }

  public async getHighlighter(): Promise<Highlighter> {
    if (this.highlighter) {
      return this.highlighter;
    }

    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = getSingletonHighlighter({
      themes: ["github-dark", "github-light"],
      langs: [
        "javascript",
        "typescript",
        "jsx",
        "tsx",
        "html",
        "css",
        "json",
        "markdown",
        "bash",
        "yaml",
        "python",
      ],
    });

    this.highlighter = await this.initPromise;
    this.initPromise = null;
    return this.highlighter;
  }

  public dispose() {
    if (this.highlighter) {
      this.highlighter.dispose();
      this.highlighter = null;
    }
  }
}

export const shikiService = ShikiService.getInstance();
