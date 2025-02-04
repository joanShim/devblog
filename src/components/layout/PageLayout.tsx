import { cn } from "@/util/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageLayout({
  children,
  title,
  description,
  className,
}: PageLayoutProps) {
  return (
    <div
      className={cn([
        "flex min-h-dvh flex-col gap-5 rounded-xl  px-5 pb-16 pt-5",
        className,
      ])}
    >
      {(title || description) && (
        <div className="flex flex-col gap-1">
          페이지레이아웃
          {title && <h1 className="text-2xl font-bold">{title}</h1>}
          {description && <span className="text-gray-500">{description}</span>}
        </div>
      )}

      {children}
    </div>
  );
}
