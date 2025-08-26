// HeroSection.jsx
import { useEffect, useState } from "react";
import MatrixRain from "../components/matrixRain";
import { FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const greetings = ["Hello", "Hola", "Bonjour", "Ayubowan", "Namaste", "Ciao", "Konnichiwa"];

export default function HeroSection() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const splitText = (text) => text.split("");

  const wordVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.8,
      rotate: 10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="min-h-screen relative flex items-center justify-center 
                 px-4 sm:px-6 lg:px-12 xl:px-16 
                 pt-20 sm:pt-24 lg:pt-20 xl:pt-24
                 text-black dark:text-white overflow-hidden"
      id="hero"
    >
      {/* Matrix background */}
      <MatrixRain />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 max-w-7xl w-full lg:pl-8 xl:pl-20">
        {/* Image + Rounded Shape + Glow */}
        <motion.div
          className="relative group flex-shrink-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glowing bg that follows the rounded shape */}
          <div
            className="w-[240px] h-[320px] 
                      xs:w-[260px] xs:h-[360px]
                      sm:w-[280px] sm:h-[400px] 
                      md:w-[300px] md:h-[440px] 
                      lg:w-[320px] lg:h-[460px]
                      xl:w-[340px] xl:h-[480px]
                      bg-red-700 opacity-80 rounded-[20%_0%_20%_0%]
                      absolute top-0 left-0 z-0
                      transform scale-100 group-hover:scale-105
                      transition-transform duration-500"
            style={{
              // red glow like your About Me
              filter: "drop-shadow(0 12px 36px rgba(0,0,0,0.45))"
            }}
          />

          <img
            src="/My_Photo.png"
            alt="Dhananjaya"
            className="relative z-20 
                      w-[240px] h-[320px] 
                      xs:w-[260px] xs:h-[360px]
                      sm:w-[280px] sm:h-[400px] 
                      md:w-[300px] md:h-[440px] 
                      lg:w-[320px] lg:h-[460px]
                      xl:w-[340px] xl:h-[480px]
                      object-cover rounded-[20%_0%_20%_0%]
                      shadow-xl transition-all duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        </motion.div>

        {/* Text and Buttons */}
        <motion.div
          className="text-center lg:text-left max-w-2xl xl:max-w-3xl flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-3 sm:mb-4 lg:mb-6 leading-tight">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-1 sm:gap-2 mb-2 sm:mb-3 lg:mb-4">
              <span className="inline-flex relative text-red-500">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={greetingIndex}
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="inline-block"
                  >
                    {splitText(greetings[greetingIndex]).map((char, i) => (
                      <motion.span
                        key={char + i}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span>World!</span>
            </div>
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              I'm <span className="italic text-red-400">Dhananjaya</span>
            </div>
          </h1>

          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-0">
            A passionate Fullstack Developer with creative thinking. Loves
            creating sleek designs and best softwares out of the box. I always
            wanna make products the best and most efficient.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
            <a
              href="#contact"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold 
                        px-6 py-3 sm:px-8 sm:py-4 
                        text-lg sm:text-xl 
                        rounded-lg shadow-md transition-all duration-300 
                        hover:shadow-lg hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="border border-red-500 hover:bg-red-500 text-red-500 hover:text-white font-semibold 
                        px-6 py-3 sm:px-8 sm:py-4 
                        text-lg sm:text-xl 
                        rounded-lg shadow-md transition-all duration-300 
                        hover:shadow-lg hover:scale-105
                        flex items-center justify-center gap-2"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}