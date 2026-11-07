"use client";

import dynamic from "next/dynamic";

// Retune visual editor: only loads during `npm run dev`.
// In production builds this branch is removed, so visitors never download it.
// Toggle edit mode with Option+D (Mac) or Alt+D (Windows).
const Retune =
  process.env.NODE_ENV === "development"
    ? dynamic(() => import("retune").then((m) => m.Retune), { ssr: false })
    : () => null;

export function DevTools() {
  return <Retune />;
}
