import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND */}

      {/* glow */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full bg-purple-600/20 blur-[240px]"
        animate={{
          x: [-250, 120, -250],
          y: [-180, 180, -180],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full bg-indigo-500/20 blur-[220px]"
        animate={{
          x: [220, -140, 220],
          y: [180, -120, 180],
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating orb */}
      <motion.div
        className="absolute w-28 h-28 rounded-full bg-purple-500/30 blur-3xl"
        animate={{
          x: [-300, 300, -300],
          y: [120, -120, 120],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            initial={{
              x: Math.random() * 1400,
              y: Math.random() * 800,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/*HERO CONTENT*/}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Intro */}
        <motion.p
          className="text-gray-400 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Hi, I’m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
        >
          Anshika{" "}
          <span className="text-purple-500 drop-shadow-[0_0_35px_rgba(168,85,247,0.9)]">
            Goel
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Computer Science student focused on building{" "}
          <span className="text-purple-400">full-stack applications</span> and
          exploring <span className="text-purple-400">blockchain systems</span>{" "}
          with clean architecture and thoughtful UI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-5 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-purple-600
            shadow-[0_0_40px_rgba(168,85,247,0.55)] hover:bg-purple-500 transition"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-gray-600
            hover:border-purple-400 hover:text-purple-300 transition"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Hero;
