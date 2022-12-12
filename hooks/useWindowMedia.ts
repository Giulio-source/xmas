import { useEffect, useState } from "react";

export function useWindowMedia() {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const isMobileMedia = window.matchMedia("(max-width: 1023px)");

    function handleOnResize() {
      setIsMobile(isMobileMedia.matches);
    }

    handleOnResize();

    isMobileMedia.addEventListener("change", handleOnResize);

    return () => isMobileMedia.removeEventListener("change", handleOnResize);
  }, []);

  return isMobile
}
