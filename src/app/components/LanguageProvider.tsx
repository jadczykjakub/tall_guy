"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function LanguageProvider({ children }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
