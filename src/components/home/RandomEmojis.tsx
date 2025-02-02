"use client";

import { getRandomEmoji } from "@/util/utils";
import { useEffect, useState } from "react";

export default function RandomEmojis() {
  const [emoji, setEmoji] = useState<string>("ㅤ");

  useEffect(() => {
    setEmoji(getRandomEmoji(["💗", "🔥", "👀", "💌"]));

    const interval = setInterval(() => {
      setEmoji(getRandomEmoji(["💗", "🔥", "👀", "💌"]));
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  if (!emoji) return null;

  return <span className="text-8xl">{emoji}</span>;
}
