import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sweet Shop Management System",
    highlight: "Featured Project",
    description:
      "Designed and developed a production-style full-stack system to manage sweet inventory, orders, and user roles. Implemented JWT-based authentication with role-based access control and built scalable REST APIs using Spring Boot, integrated with a responsive React frontend.",
    tech: ["Spring Boot", "React", "JWT", "SQLite"],
    github: "https://github.com/AnshikaGoel3/ai-kata-sweet-shop",
    featured: true,
  },
  {
    title: "Money Manager",
    highlight: "Backend Focus",
    description:
      "Personal finance management application to track income, expenses, and monthly budgets. Designed secure REST APIs using Spring Boot and built clean React-based views for effective financial data visualization.",
    tech: ["React", "Spring Boot", "REST API"],
    github: "https://github.com/AnshikaGoel3/Money-Manager",
  },
  {
    title: "Resume Builder",
    highlight: "Product UI",
    description:
      "Resume builder application enabling users to generate professional resumes with real-time preview. Integrated backend services for structured data handling and PDF generation with a focus on usability and clean interaction design.",
    tech: ["React", "Spring Boot", "PDF"],
    github: "https://github.com/AnshikaGoel3/AI-Resume-Builder",
  },
  {
    title: "NGO Donation DApp",
    highlight: "Blockchain",
    description:
      "Blockchain-based donation platform enabling transparent and traceable Ethereum transactions. Implemented Solidity smart contracts and integrated MetaMask for secure interaction with deployed contracts.",
    tech: ["Solidity", "React", "Hardhat", "MetaMask"],
    github: "https://github.com/AnshikaGoel3/ngo-donation-dapp",
  },
  {
    title: "Gaming Token (ERC-20)",
    highlight: "Smart Contract",
    description:
      "ERC-20 compliant gaming token smart contract exploring token creation, transfers, and basic tokenomics, focusing on Solidity fundamentals and Ethereum development best practices.",
    tech: ["Solidity", "ERC-20", "Ethereum"],
    github:
      "https://github.com/AnshikaGoel3/Degen-Token-ERC-20-Unlocking-the-Future-of-Gaming",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-8 md:px-20 py-32 overflow-hidden"
    >
      {/*BACKGROUND*/}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[240px]"
        initial={{ x: -300, y: 200 }}
        animate={{ x: [-300, 200, -300], y: [200, -150, 200] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[220px]"
        initial={{ x: 300, y: -200 }}
        animate={{ x: [300, -200, 300], y: [-200, 150, -200] }}
        transition={{ duration: 65, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/*HEADER*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span>Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A focused selection of projects demonstrating my work in full-stack
            development, backend systems, and blockchain fundamentals.
          </p>
        </motion.div>

        {/*GRID*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: index * 0.08 }}
              whileHover="hover"
              className={`relative rounded-2xl p-8 overflow-hidden
              border ${
                project.featured
                  ? "border-purple-500/60"
                  : "border-gray-700"
              }
              bg-[#0b0b0b]
              shadow-[0_0_45px_rgba(168,85,247,0.18)]`}
            >
              {/* Hover spotlight */}
              <motion.div
                variants={{ hover: { opacity: 1, scale: 1.25 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-purple-600/25 blur-3xl"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs uppercase tracking-wider text-purple-400 mb-3">
                  {project.highlight}
                </span>

                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs px-3 py-1 rounded-full
                      border border-gray-600 text-gray-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2
                  text-sm text-purple-400 hover:text-purple-300 transition"
                >
                  <FaGithub /> View Repository →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Projects;
