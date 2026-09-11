import type { MouseEvent } from "react";

export function handleSpotlightMove(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
}
