import { useEffect, useRef, useState } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    const characters = "01".split("");

    const draw = () => {
      ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = isDark ? "#d1d5db" : "#0f172a"; // neon green for dark, slate for light
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20"
    />
  );
}
