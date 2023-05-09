"use client";

import React from "react";

export function Logo({ images }: { images: string[] }) {
  return (
    <img
      src={images[0]}
      alt="Logo"
      className="dark:invert"
      width={100}
      height={24}
    />
  )
}
