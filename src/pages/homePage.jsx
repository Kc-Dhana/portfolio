import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Homepage() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme") === "dark";
      } else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    html.style.scrollBehavior = "smooth";
  }, [darkMode]);

  const projects = [
    {
      title: "Hotel Booking App",
      description: "A MERN stack hotel booking app with admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Employee API Service",
      description: "Microservice for employee management using Express.",
      tech: ["Express", "MongoDB"],
      github: "#",
      demo: "#",
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

  return (
    <div className="font-sans dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 shadow-md z-50 transition-colors duration-500">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wide cursor-default select-none">
            Dhananjaya
          </h1>
          <nav className="hidden md:flex space-x-10 text-sm font-semibold tracking-wide">
            {["About", "Projects", "Skills", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="relative group text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              >
                {section}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 group-hover:w-full transition-[width] duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl p-2 rounded-full bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-yellow-400 hover:scale-110 hover:rotate-12 transition-transform duration-300 shadow-md"
            title="Toggle Dark Mode"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="pt-36 pb-24 flex flex-col items-center text-center px-6 sm:px-12 max-w-4xl mx-auto animate-fadeIn"
        style={{ animationDuration: "1s" }}
      >
        <img
          src="/my-photo.jpeg"
          alt="Your Portrait"
          className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full shadow-lg border-4 border-indigo-500 mb-8 transition-transform duration-500 hover:scale-105"
        />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent select-none">
          Hi, I'm Dhananjaya Perera
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
          Full-Stack Software Engineer
        </p>
        <a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg font-semibold transition-transform transform hover:scale-105"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 sm:px-12 max-w-3xl mx-auto text-center animate-fadeIn"
        style={{ animationDuration: "1.2s" }}
      >
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
          About Me
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a software engineer passionate about building scalable, modern web
          applications. I work with the MERN stack and love bringing designs to
          life with responsive frontends and secure backends.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-800 animate-fadeIn"
        style={{ animationDuration: "1.4s" }}
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-[1.03] hover:shadow-indigo-500/30"
            >
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{p.description}</p>
              <p className="text-sm text-gray-500 mb-6 italic">
                Tech: {p.tech.join(", ")}
              </p>
              <div className="flex gap-6">
                <a
                  href={p.demo}
                  className="text-indigo-600 hover:text-indigo-700 dark:hover:text-indigo-400 font-semibold underline transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  className="text-indigo-600 hover:text-indigo-700 dark:hover:text-indigo-400 font-semibold underline transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 sm:px-12 max-w-5xl mx-auto animate-fadeIn"
        style={{ animationDuration: "1.6s" }}
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((s, i) => (
            <span
              key={i}
              className="bg-gradient-to-r from-indigo-200 to-purple-300 dark:from-indigo-700 dark:to-purple-900 text-indigo-900 dark:text-indigo-100 px-5 py-3 rounded-full text-base font-semibold shadow-md select-none cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-800 text-center animate-fadeIn"
        style={{ animationDuration: "1.8s" }}
      >
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
          Contact
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
          Want to work together or just say hi?
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-10 py-4 rounded-full shadow-lg font-semibold transition-transform transform hover:scale-105"
        >
          youremail@example.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 select-none">
        &copy; {new Date().getFullYear()} Dhananjaya Perera. All rights reserved.
      </footer>

      {/* Animate fadeIn keyframes in Tailwind, add to your global CSS or tailwind.config.js */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }
      `}</style>
    </div>
  );
}
