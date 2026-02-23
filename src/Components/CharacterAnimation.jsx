import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";

export default function CharacterAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {

    /* ================= CANVAS ================= */
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // initial size (will be updated on resize)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 78;
    const images = [];
    const imageSeq = { frame: 0 };

    const files = (i) => {
      const num = String(i + 1).padStart(4, "0");
      // Resolve via bundler so assets inside src are available at runtime
      try {
        return new URL(`../assets/CYBERFICTION-SOURCE-CODE/male${num}.png`, import.meta.url).href;
      } catch (e) {
        // fallback to public path if bundler resolution isn't available
        return `/CYBERFICTION-SOURCE-CODE/male${num}.png`;
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      img.onload = () => {
        img._failed = false;
      };
      img.onerror = () => {
        img._failed = true;
      };
      images.push(img);
    }

    const render = () => {
      let img = images[imageSeq.frame];
      if (!img || img._failed || !img.complete || img.naturalWidth === 0) {
        const idx = Math.max(0, imageSeq.frame);
        let fallback = null;
        for (let d = 1; d <= 10; d++) {
          const prev = images[idx - d];
          const next = images[idx + d];
          if (prev && !prev._failed && prev.complete && prev.naturalWidth) {
            fallback = prev;
            break;
          }
          if (next && !next._failed && next.complete && next.naturalWidth) {
            fallback = next;
            break;
          }
        }
        if (fallback) img = fallback;
      }
      if (!img || img._failed || !img.complete || img.naturalWidth === 0) return;
      scaleImage(img, ctx);
    };

    images[0].onload = render;

    // Time-based animation - run once through all frames
    let currentFrame = 0;
    const frameInterval = setInterval(() => {
      if (currentFrame < frameCount) {
        imageSeq.frame = currentFrame;
        render();
        currentFrame++;
      } else {
        clearInterval(frameInterval);
      }
    }, 50); // Change frame every 50ms (20fps) - adjust as needed

    // after render is defined, we can safely create the resize helper
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    // listen for resize/orientation changes
    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(frameInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  /* ================= IMAGE SCALE ================= */
  const scaleImage = (img, ctx) => {
    if (!img) return;
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  };

  return (
    <div className="character-animation-container">
      <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
