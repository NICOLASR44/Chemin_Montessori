import { useEffect, useState } from "react";

export default function useScreenSize(breakpoint = 1000) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleScreenChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, [breakpoint]);

  return isSmallScreen;
}
