"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`ml-4 flex size-10 items-center justify-center rounded-md transition-[background-color] hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-[#313131] dark:active:bg-[#242424]`}
      aria-label={`${theme === "dark" ? "라이트" : "다크"}모드로 변경`}
    >
      {theme === "dark" ? (
        <Moon className="size-5 text-white" />
      ) : (
        <Sun className="size-5 text-gray-500" />
      )}
    </button>
  );
}
