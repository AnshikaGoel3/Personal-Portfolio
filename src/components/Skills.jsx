import { motion } from "framer-motion";
import { FaReact, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiSolidity,
  SiEthereum,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, group: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, group: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, group: "Frontend" },

  { name: "Java", icon: FaJava, group: "Backend" },
  { name: "Spring Boot", icon: SiSpringboot, group: "Backend" },
  { name: "MySQL", icon: SiMysql, group: "Backend" },

  { name: "Solidity", icon: SiSolidity, group: "Blockchain" },
  { name: "Ethereum", icon: SiEthereum, group: "Blockchain" },

  { name: "Git", icon: FaGitAlt, group: "Tools" },
  { name: "GitHub", icon: FaGithub, group: "Tools" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/*BACKGROUND*/}

      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[240px]"
        initial={{ x: -300, y: -200 }}
        animate={{ x: [-300, 200, -300], y: [-200, 150, -200] }}
        transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[220px]"
        initial={{ x: 300, y: 300 }}
        animate={{ x: [300, -200, 300], y: [300, -150, 300] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      {/*HEADING*/}

      <div className="relative z-10 px-8 md:px-20 max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Tech <span className="text-purple-500">Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 max-w-xl"
        >
          Technologies I actively use while building full-stack and blockchain
          applications.
        </motion.p>
      </div>

      {/*SKILLS*/}

      <div className="relative z-10 overflow-x-auto scrollbar-hide">
        <div className="flex gap-14 px-8 md:px-20 pb-24 snap-x snap-mandatory">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: index * 0.05 }}
                whileHover="hover"
                className="relative snap-center min-w-[240px] h-[240px]
                bg-[#0b0b0b] border border-gray-700 rounded-2xl
                flex flex-col items-center justify-center
                overflow-hidden
                shadow-[0_0_40px_rgba(168,85,247,0.18)]"
              >
                {/* Ambient hover glow */}
                <motion.div
                  variants={{ hover: { opacity: 1, scale: 1.35 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-purple-600/25 blur-3xl"
                />

                {/* Icon */}
                <motion.div
                  variants={{
                    hover: {
                      scale: 1.25,
                      y: -8,
                    },
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="z-10"
                >
                  <Icon className="text-6xl text-purple-400" />
                </motion.div>

                {/* Skill name */}
                <motion.p
                  variants={{ hover: { opacity: 1, y: 0 } }}
                  initial={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 text-sm font-semibold text-gray-200 z-10"
                >
                  {skill.name}
                </motion.p>

                {/* Category */}
                <motion.span
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-1 text-xs text-purple-400 z-10 tracking-wide"
                >
                  {skill.group}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <p className="relative z-10 text-center text-gray-500 text-sm mt-4">
        Hover cards · Scroll horizontally →
      </p>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Skills;
