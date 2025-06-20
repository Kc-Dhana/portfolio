import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Homepage() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        document.documentElement.style.scrollBehavior = "smooth";
    }, [darkMode]);

    const projects = [
        {
            title: "Hotel Booking App",
            description: "A MERN stack hotel booking app with admin dashboard.",
            tech: ["React", "Node.js", "MongoDB"],
            github: "#",
            demo: "#"
        },
        {
            title: "Employee API Service",
            description: "Microservice for employee management using Express.",
            tech: ["Express", "MongoDB"],
            github: "#",
            demo: "#"
        }
    ];

    const skills = ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Tailwind", "JavaScript"];

    return (
        <div className="font-sans dark:bg-gray-900 dark:text-white bg-white text-gray-800 min-h-screen">

            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 shadow z-50">
                <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
                    <h1 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">Dhananjaya</h1>
                    <nav className="hidden md:flex space-x-6 text-sm font-medium">
                        <a href="#about" className="hover:text-indigo-400">About</a>
                        <a href="#projects" className="hover:text-indigo-400">Projects</a>
                        <a href="#skills" className="hover:text-indigo-400">Skills</a>
                        <a href="#contact" className="hover:text-indigo-400">Contact</a>
                    </nav>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-xl p-2 rounded-full bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-yellow-400 hover:scale-105 transition"
                        title="Toggle Dark Mode"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-20 flex flex-col items-center text-center px-6">
                <img
                    src="/my-photo.jpeg"
                    alt="Your Portrait"
                    className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-indigo-500 mb-6"
                />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Dhananjaya Perera</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Full-Stack Software Engineer</p>
                <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">Contact Me</a>
            </section>

            {/* About */}
            <section id="about" className="py-20 px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
                <p className="text-center text-gray-600 dark:text-gray-300">
                    I'm a software engineer passionate about building scalable, modern web applications. I work with the MERN stack and love bringing designs to life with responsive frontends and secure backends.
                </p>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
                <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((p, i) => (
                        <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">{p.description}</p>
                            <p className="text-sm text-gray-500 mb-4">Tech: {p.tech.join(", ")}</p>
                            <div className="flex gap-4">
                                <a href={p.demo} className="text-indigo-600 hover:underline">Live Demo</a>
                                <a href={p.github} className="text-indigo-600 hover:underline">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((s, i) => (
                        <span key={i} className="bg-indigo-100 dark:bg-indigo-800 dark:text-white text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                            {s}
                        </span>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                    Want to work together or just say hi?
                </p>
                <div className="text-center">
                    <a href="mailto:youremail@example.com" className="text-indigo-600 hover:underline text-lg">youremail@example.com</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Dhananjaya Perera. All rights reserved.
            </footer>
        </div>
    );
}
