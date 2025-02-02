import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import { Link } from "./components/link";
import { CodeBlock } from "./components/code-block";


const components = {
  a: Link,
  // h1: (props) => <Heading level={1} {...props} />,
  // h2: (props) => <Heading level={2} {...props} />,
  // h3: (props) => <Heading level={3} {...props} />,
  // h4: (props) => <Heading level={4} {...props} />,
  // h5: (props) => <Heading level={5} {...props} />,
  // h6: (props) => <Heading level={6} {...props} />,
  pre: ({ children }: { children: any }) => {
    const code = children?.props?.children || "";
    const language =
      children?.props?.className?.replace("language-", "") || "text";

    return <CodeBlock language={language}>{code}</CodeBlock>;
  },
  code: ({ children, className }: { children: string; className?: string }) => {
    if (className?.startsWith("language-")) {
      return children;
    }
    return (
      <code className="rounded px-1 py-0.5 font-mono text-sm">{children}</code>
    );
  },
};

const useMDXComponent = (code: string) => {
  return useMemo(() => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
  }, [code]);
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function Mdx({ code, components: customComponents = {} }: MDXProps) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose max-w-none dark:prose-invert">
      <Component components={{ ...components, ...customComponents }} />
    </article>
  );
}

