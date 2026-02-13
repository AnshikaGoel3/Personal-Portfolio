import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Resume Generator",
    highlight: "Featured • AI Project",
    description:
      "Full-stack AI resume platform with real-time preview, PDF export and Groq LLM integration for AI-enhanced content generation.",
    tech: ["React", "Spring Boot", "Groq API", "JWT"],
    github: "https://github.com/AnshikaGoel3/AI-Resume-Generator",
    live: "https://ai-resume-generator-amber.vercel.app",
    image: "/projects/ai-resume.png",
    featured: true,
  },
  {
    title: "Money Manager",
    highlight: "Backend Heavy",
    description:
      "Financial management system with expense tracking, analytics, JWT authentication and scalable REST APIs.",
    tech: ["React", "Spring Boot", "MongoDB", "JWT"],
    github: "https://github.com/AnshikaGoel3/money-manager",
    live: "https://money-manager-frontend-pi.vercel.app",
    image: "/projects/money-manager.png",
  },
  {
    title: "Sweet Shop Management",
    highlight: "System Design",
    description:
      "Role-based inventory and order management system using layered architecture, JWT authentication and stock validation logic.",
    tech: ["Spring Boot", "React", "JWT", "SQLite"],
    github: "https://github.com/AnshikaGoel3/ai-kata-sweet-shop",
    live: "https://ai-kata-sweet-shop.vercel.app/",
    image: "/projects/sweet-shop.png",
  },

  // ===== NO IMAGE PROJECTS =====
  {
    title: "NGO Donation DApp",
    highlight: "Blockchain",
    description:
      "Ethereum-based donation platform enabling transparent transactions using Solidity smart contracts and MetaMask integration.",
    tech: ["Solidity", "React", "Hardhat", "MetaMask"],
    github: "https://github.com/AnshikaGoel3/ngo-donation-dapp",
    live: "",
    image: null,
  },
  {
    title: "Gaming Token (ERC-20)",
    highlight: "Smart Contract",
    description:
      "ERC-20 gaming token smart contract exploring token creation, transfers and tokenomics fundamentals.",
    tech: ["Solidity", "ERC-20", "Ethereum"],
    github:
      "https://github.com/AnshikaGoel3/Degen-Token-ERC-20-Unlocking-the-Future-of-Gaming",
    live: "",
    image: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-8 md:px-20 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[240px]"
        animate={{ x: [-250, 200, -250], y: [200, -150, 200] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            Real-world projects focused on backend architecture, AI integration
            and blockchain fundamentals.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group rounded-2xl overflow-hidden bg-[#0b0b0b]
              border ${
                project.featured ? "border-purple-500/60" : "border-gray-700"
              }
              shadow-[0_0_25px_rgba(168,85,247,0.12)]`}
            >
              {/* Image OR fallback */}
              {project.image ? (
                <div className="h-44 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ) : (
                <div className="h-44 bg-gradient-to-br from-purple-600/20 to-indigo-600/10 flex items-center justify-center">
                  <span className="text-purple-400 text-sm tracking-widest uppercase">
                    {project.highlight}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <span className="text-xs text-purple-400 uppercase mb-2">
                  {project.highlight}
                </span>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-sm flex items-center gap-2"
                    >
                      Live <FaExternalLinkAlt size={12} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-full border border-gray-600 hover:border-purple-500 text-sm flex items-center gap-2"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
