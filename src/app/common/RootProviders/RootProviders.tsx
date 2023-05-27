"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { setupViewportHeight } from "@/app/utils";

type RootProvidersProps = {
  children: React.ReactNode;
};

export const RootProviders = ({ children }: RootProvidersProps) => {
  useEffect(() => {
    return setupViewportHeight();
  }, []);

  // Temporary solution for scroll on route change for Next.js 13 --> https://github.com/vercel/next.js/issues/28778
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <div>{children}</div>;
};
