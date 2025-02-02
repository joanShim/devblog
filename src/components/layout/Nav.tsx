"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/util/utils";

export const navs = [
  {
    href: "/blog",
    label: "Blog",
  },
  // {
  //   href: "/snippets",
  //   label: "Snippets",
  // },
  {
    href: "/about",
    label: "About",
  },
];

export default function Nav() {
  return (
    <>
      <nav
        className="flex grow items-center justify-end gap-4 text-sm font-medium md:gap-[6px]
      "
      >
        {navs.map(({ href, label }) => (
          <NavItem href={href} label={label} key={label} />
        ))}
      </nav>
    </>
  );
}

export function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: VoidFunction;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex rounded-md p-2 text-[15.5px] transition-[background-color] hover:bg-gray-100  dark:text-gray-300  dark:hover:bg-[#313131]",
        pathname?.startsWith(href) ? "font-extrabold" : "font-medium",
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
