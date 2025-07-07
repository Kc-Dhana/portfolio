import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ScrambleText({ text = "Skills", speed = 80 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (!inView || done) return;

    let frame = 0;
    const interval = setInterval(() => {
      let output = "";
      for (let i = 0; i < text.length; i++) {
        if (i < frame) {
          output += text[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplayedText(output);

      frame++;
      if (frame > text.length) {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => setDone(false), 5000); // allow re-trigger after 2 sec
      }
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text, speed, done]);

  return (
    <h2
      ref={ref}
      className="text-4xl font-extrabold mb-10 text-center tracking-wide "
    >
      {displayedText}
    </h2>
  );
}
