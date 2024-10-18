// useHeroAnimations.js
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function useHeroAnimations(container) {
  useGSAP(
    () => {
      gsap.from(".hero__flower9-svg", {
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".hero__flower9-svg", {
        rotate: 360,
        duration: 25,
        repeat: -1,
        repeatDelay: 0,
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: Infinity, repeatDelay: 1 });
      tl.to(".hero__star-SVG", {
        rotation: "15deg",
        ease: "power.in",
        duration: 1,
      });
      tl.to(".hero__star-SVG", {
        rotation: "-45deg",
        ease: "power.in",
        duration: 1.5,
      });
      tl.to(".hero__star-SVG", {
        rotation: "15deg",
        ease: "power.in",
        duration: 0.5,
        delay: 1,
      });
      tl.to(".hero__star-SVG", {
        rotation: "-190deg",
        ease: "power.in",
        duration: 1,
        delay: 1,
      });
      tl.to(".hero__star-SVG", {
        rotation: "0",
        ease: "power.in",
        duration: 1,
        delay: 1,
      });
    },
    [],
    { scope: container }
  );

  useGSAP(
    () => {
      gsap.from(".hero__image-background", {
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        duration: 0.5,
      });
    },
    { scope: container }
  );
}
