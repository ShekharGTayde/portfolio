import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// custom hook for animating headings on scroll. Accepts an optional
// section id (defaults to '#') to use as the trigger.
export default function useGsapHeading(triggerSelector) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".heading", {
      opacity: 0,
      scale: 0.9,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerSelector || "#",
        start: "top 80%",
        once: true,
        toggleActions: "restart none none none",
      },
    });
  }, [triggerSelector]);
}
