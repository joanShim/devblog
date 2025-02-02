"use client";

import dynamic from "next/dynamic";
import { ThemeButtonSkeleton } from "../skeleton/ThemeButtonSkeleton";

type Theme = "light" | "dark";

// ssr: false로 설정하여 클라이언트 사이드에서만 렌더링
const ThemeToggleButton = dynamic(() => import("./ThemeToggleButton"), {
  ssr: false,
  loading: () => <ThemeButtonSkeleton />,
});

export default function ToggleTheme() {
  return <ThemeToggleButton />;
}
