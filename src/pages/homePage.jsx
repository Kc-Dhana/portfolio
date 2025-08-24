import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import ScrambleText from "../components/scrambleText";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import emailjs from "emailjs-com";
import MatrixRain from "../components/matrixRain";
import ProjectCard from "../components/projectCard";
import HeroSection from "../components/heroSection";
import { motion } from "framer-motion";

// Floating Dots Background Component
const FloatingDots = ({ count = 20, className = "" }) => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500/40 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Particle System Component
const ParticleSystem = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(239, 68, 68, 0.${Math.floor(Math.random() * 5) + 2}) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Geometric Shapes Background
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-red-300/20 dark:border-red-400/20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Homepage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      } else {
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (darkMode) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      html.style.scrollBehavior = "smooth";
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Hotel Booking App",
      description: "A MERN stack hotel booking app with admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      frontend: "https://github.com/your/hotel-frontend",
      backend: "https://github.com/your/hotel-backend",
      demo: "https://hotel-booking.vercel.app",
      images: [
        "/Car_service.png",
        "/Car_service1.PNG",
        "/Car_service2.PNG",
        "/Car_service5.png",
      ],
    },
    {
      title: "Employee API Service",
      description: "Microservice for employee management using Express.",
      tech: ["Express", "MongoDB"],
      backend: "https://github.com/your/employee-api",
      demo: "#",
      images: [
        "/blog1.png",
        "/blog2.png",
        "/blog3.png",
        "/blog4.png",
      ],
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
  ];

  const skillIcons = {
    React: <FaReact className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    Express: <SiExpress className="text-gray-700 dark:text-white" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    HTML: <FaHtml5 className="text-orange-600" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    JavaScript: <FaJs className="text-yellow-400" />,
  };

  const inputStyle =
    "w-full p-4 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-300/50 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400/50 transition-all duration-300";

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send. Please try again.");
        }
      );
  }

  return (
    <div className="font-sans dark:bg-gray-900 bg-red-50 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-lg border-b border-white/20 dark:border-white/10 z-50 transition-all duration-500">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <motion.h1 
            className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent tracking-wide cursor-default select-none"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            K C Dhananjaya Perera
          </motion.h1>
          <nav className="hidden md:flex space-x-10 text-sm font-semibold tracking-wide">
            {["Hero","About", "Projects", "Skills", "Contact"].map((section, i) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="relative group text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {section}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 group-hover:w-full transition-[width] duration-300"></span>
              </motion.a>
            ))}
          </nav>

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl p-3 rounded-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-md border border-white/30 dark:border-white/10 text-red-600 dark:text-yellow-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            title="Toggle Dark Mode"
            aria-label="Toggle dark mode"
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>
      </header>

      {/* Fixed Social Media Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-4">
          {[
            { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/your-profile", color: "hover:text-blue-700" },
            { icon: <FaFacebookF />, href: "https://facebook.com/your-profile", color: "hover:text-blue-600" },
            { icon: <FaInstagram />, href: "https://instagram.com/your-profile", color: "hover:text-pink-500" },
            { icon: <FaGithub />, href: "https://github.com/your-username", color: "hover:text-gray-800 dark:hover:text-white" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-md border border-white/30 dark:border-white/10 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 1 }}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FloatingDots count={15} />
        <ParticleSystem />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="text-center md:text-left max-w-2xl relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-red-600/10 dark:from-red-900/20 dark:to-gray-900/30 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-white/10"></div>
              <div className="relative z-10 p-6">
                <div className="relative inline-block">
                  <ScrambleText text="About Me!" speed={100} />
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                  I'm a software engineer passionate about building scalable, modern web
                  applications. I work with the MERN stack and love bringing designs to
                  life with responsive frontends and secure backends.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute w-[300px] h-[400px] md:w-[340px] md:h-[460px] bg-red-700 opacity-80 blur-md z-0 group-hover:scale-105 transition-transform duration-500"
                style={{
                  clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                }}
              />
              <img
                src="/My_Photo2.png"
                alt="Dhananjaya"
                className="relative z-20 w-[300px] h-[400px] md:w-[340px] md:h-[460px] object-cover shadow-xl transition-all duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{
                  clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="relative py-20 px-6 sm:px-12 bg-gradient-to-br from-red-50/30 to-red-100/20 dark:from-red-900/20 dark:to-gray-900/80 backdrop-blur-sm overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <GeometricShapes />
        <FloatingDots count={25} className="opacity-60" />
        
        <div className="relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <ScrambleText text="Projects" speed={100} />
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + i * 0.2, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 to-red-600/10 dark:from-red-900/20 dark:to-gray-900/30 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-white/10 group-hover:scale-105 transition-all duration-300"></div>
                <div className="relative z-10">
                  <ProjectCard {...p} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="relative py-20 px-6 sm:px-12 max-w-5xl mx-auto overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ParticleSystem />
        <FloatingDots count={20} />
        
        <div className="relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <ScrambleText text="Skills" speed={100} />
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + i * 0.1, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -10, 
                  rotateY: 15,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 dark:from-red-900/30 dark:to-gray-900/40 rounded-xl backdrop-blur-sm border border-white/30 dark:border-white/20 group-hover:border-red-400/50 transition-all duration-300"></div>
                <div className="relative flex flex-col items-center justify-center w-28 h-28 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md text-red-900 dark:text-white text-xl font-semibold transition-all duration-300">
                  <motion.div 
                    className="text-3xl mb-2"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skillIcons[s] || "🔧"}
                  </motion.div>
                  <div className="text-sm">{s}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="relative py-20 px-6 sm:px-12 text-center bg-gradient-to-br from-red-50/30 to-red-100/20 dark:from-red-900/20 dark:via-gray-800/60 dark:to-black/90 backdrop-blur-sm overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <GeometricShapes />
        <ParticleSystem />
        
        <div className="relative z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <ScrambleText text="Contact Me!" speed={100} />
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Got a question or proposal? Send me a message and I'll reply soon.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto relative"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.6, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-2xl"></div>
            <div className="relative z-10 p-8 space-y-6">
              <motion.input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className={inputStyle}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className={inputStyle}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
                className={inputStyle}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className={inputStyle}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm border border-red-500/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="relative text-center py-8 text-sm text-gray-500 dark:text-gray-400 select-none backdrop-blur-sm border-t border-white/10 dark:border-white/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent dark:via-red-400/5"></div>
        <div className="relative z-10">
          &copy; {new Date().getFullYear()} Dhananjaya Perera. All rights reserved.
        </div>
      </motion.footer>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .glassmorphism {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        .dark .glassmorphism {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </div>
  );
}