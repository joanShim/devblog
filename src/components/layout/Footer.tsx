import { getTzDay } from "@/util/days";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-14 w-full items-center justify-between gap-3 border-t px-6">
      <div className="flex items-center justify-center gap-3">
        <Link href="https://github.com/joanShim" target="_blank">
          <Github size={20} />
        </Link>
        <Link href="https://www.linkedin.com/in/jeongahshim" target="_blank">
          <Linkedin size={20} />
        </Link>
      </div>
      <span className="text-xs">
        © {getTzDay(new Date()).get("year")} 청
      </span>
    </footer>
  );
}
