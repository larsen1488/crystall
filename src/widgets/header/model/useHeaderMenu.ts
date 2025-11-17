"use client";

import { useState } from "react";

export function useHeaderMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return { open, toggleMenu };
}
