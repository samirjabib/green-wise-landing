import { useEffect } from "react";
import { usePathname } from "next/navigation";

type RootProvidersProps = {
  children: React.ReactNode;
};

const setupViewportHeight = () => {
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  const viewportHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  viewportHeight();

  window.addEventListener("resize", viewportHeight);

  return () => {
    window.removeEventListener("resize", viewportHeight);
  };
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
