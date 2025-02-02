"use client";

import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { cn } from "@/util/utils";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header className="relative mt-2 flex items-center justify-center border-b px-6">
      <Link
        href={"/"}
        className={cn(
          "hover:text-foreground/80 mr-auto py-3 font-bold transition-colors",
        )}
      >
        청
      </Link>
      <Nav />
      <ToggleTheme />
    </header>
  );
}
