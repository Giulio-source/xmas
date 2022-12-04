import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { StyledLoader } from "./Loader.style";

export const Loader = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const loaderRef = useRef<HTMLDivElement>(null);

  function aniStart() {
    const q = gsap.utils.selector(loaderRef.current);
    gsap.to(q("div"), {
      y: "100%",
      duration: 0.8,
      ease: "Expo.easeInOut",
      stagger: 0.1,
    });
  }

  const aniEnd = () => {
    const q = gsap.utils.selector(loaderRef.current);
    gsap.to(q("div"), {
      y: "200%",
      duration: 0.8,
      ease: "Expo.easeInOut",
      stagger: 0.1,
      onComplete: () => onClose(),
    });
  };

  useEffect(() => {
    aniStart();

    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
    };
  }, [router]);

  return (
    <StyledLoader ref={loaderRef}>
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  );
};
