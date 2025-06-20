
export default function Homepage() {
    const projects = [
        {
            title: "Hotel Booking App",
            description: "A full-stack MERN app for hotel room booking and management.",
            tech: ["React", "Node.js", "MongoDB"],
            github: "#",
            demo: "#"
        },
        {
            title: "Employee Service API",
            description: "Microservice built with Node.js and Express for managing employees.",
            tech: ["Express", "MongoDB", "Postman"],
            github: "#",
            demo: "#"
        }
    ];

    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express", "Tailwind"];

    return (
        <div className="font-sans text-gray-800 bg-white">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Dhananjaya Perera</h1>
                <p className="text-xl text-gray-600 mb-6">Full-Stack Software Engineer</p>
                <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
                    Contact Me
                </a>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 bg-white" id="about">
                <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
                <p className="text-center max-w-2xl mx-auto text-gray-600">
                    I’m a passionate software engineer who builds full-stack web applications using modern technologies like React, Node.js, and MongoDB. I enjoy solving real-world problems and building clean, scalable UIs.
                </p>
            </section>

            {/* Projects Section */}
            <section className="py-16 px-6 bg-gray-50" id="projects">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white shadow-md rounded-xl p-6 border">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mb-4">Tech: {project.tech.join(", ")}</p>
                            <div className="flex gap-4">
                                <a href={project.demo} className="text-indigo-600 hover:underline">Live Demo</a>
                                <a href={project.github} className="text-gray-700 hover:underline">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 px-6 bg-white" id="skills">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    {skills.map((skill, idx) => (
                        <span key={idx} className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6 bg-gray-100" id="contact">
                <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
                <p className="text-center text-gray-600 mb-6">Feel free to reach out for collaboration or project discussion.</p>
                <div className="text-center">
                    <a href="mailto:youremail@example.com" className="text-indigo-600 underline text-lg">youremail@example.com</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-500 text-sm py-6">
                &copy; {new Date().getFullYear()} Dhananjaya Perera. All rights reserved.
            </footer>
        </div>
    );
}
