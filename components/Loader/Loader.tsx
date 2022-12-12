import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { StyledLoader } from "./Loader.style";

export function showLoaderAnimation(callback: () => void) {
  return gsap
    .timeline()
    .fromTo(
      "#loader div",
      {
        y: "0%",
      },
      {
        y: "100%",
        duration: 0.8,
        ease: "Expo.easeInOut",
        stagger: 0.1,
      }
    )
    .to("#loader div", {
      y: "200%",
      duration: 0.8,
      ease: "Expo.easeInOut",
      stagger: 0.1,
      onStart: callback
    }, '+=0.5');
}

export const Loader = () => {
  const router = useRouter();
  const loaderTimeout = useRef<ReturnType<typeof setTimeout>>();

  function aniStart() {
    loaderTimeout.current = setTimeout(() => {
      gsap.fromTo(
        "#loader div",
        {
          y: "0%",
        },
        {
          y: "100%",
          duration: 0.8,
          ease: "Expo.easeInOut",
          stagger: 0.1,
        }
      );
    }, 300);
  }

  const aniEnd = () => {
    clearTimeout(loaderTimeout.current);
    gsap.fromTo(
      "#loader div",
      { y: "100%" },
      {
        y: "200%",
        duration: 0.8,
        ease: "Expo.easeInOut",
        stagger: 0.1,
      }
    );
  };

  useEffect(() => {
    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
    };
  }, [router]);

  return (
    <StyledLoader id="loader">
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  );
};
