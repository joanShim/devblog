"use client";

import { useEffect, useState, useCallback } from "react";

interface DynamicTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const DEFAULT_TYPING_SPEED = 100;
const DEFAULT_DELETING_SPEED = 60;
const DEFAULT_PAUSE_DURATION = 2200;

export default function DynamicText({
  texts,
  typingSpeed = DEFAULT_TYPING_SPEED,
  deletingSpeed = DEFAULT_DELETING_SPEED,
  pauseDuration = DEFAULT_PAUSE_DURATION,
}: DynamicTextProps) {
  const [state, setState] = useState({
    currentText: "",
    currentIndex: 0,
    isTyping: true,
    isPaused: false,
  });

  const handleTypingAnimation = useCallback(() => {
    if (!texts.length) return null;

    const currentFullText = texts[state.currentIndex];

    if (state.isPaused) {
      return setTimeout(() => {
        setState((prev) => ({ ...prev, isPaused: false, isTyping: false }));
      }, pauseDuration);
    }

    if (state.isTyping) {
      if (state.currentText !== currentFullText) {
        return setTimeout(() => {
          setState((prev) => ({
            ...prev,
            currentText: currentFullText.slice(0, prev.currentText.length + 1),
          }));
        }, typingSpeed);
      }
      return setTimeout(() => {
        setState((prev) => ({ ...prev, isPaused: true }));
      }, typingSpeed);
    }

    if (state.currentText) {
      return setTimeout(() => {
        setState((prev) => ({
          ...prev,
          currentText: prev.currentText.slice(0, -1),
        }));
      }, deletingSpeed);
    }

    return setTimeout(() => {
      setState((prev) => ({
        ...prev,
        currentIndex: (prev.currentIndex + 1) % texts.length,
        isTyping: true,
      }));
    }, deletingSpeed);
  }, [state, texts, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timeoutId = handleTypingAnimation();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleTypingAnimation]);

  return (
    <div>
      <h2 className="inline-block">{state.currentText}</h2>
      <span className="animate-flickering ml-0.5 font-light">|</span>
    </div>
  );
}
