import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/*BACKGROUND MOTION*/}

      {/* Slow drifting glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-purple-600/20 blur-[220px]"
        initial={{ x: -200, y: -200 }}
        animate={{
          x: [-200, 100, -200],
          y: [-200, 150, -200],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[200px]"
        initial={{ x: 200, y: 200 }}
        animate={{
          x: [200, -100, 200],
          y: [200, -150, 200],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/*HERO CONTENT*/}

      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
      >
        {/* Small intro */}
        <motion.p
          className="text-gray-400 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Hi, I’m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Anshika{" "}
          <span className="text-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
            Goel
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          Computer Science student focused on building{" "}
          <span className="text-purple-400">full-stack applications</span> and
          exploring{" "}
          <span className="text-purple-400">blockchain systems</span> with clean
          architecture and thoughtful UI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-purple-600 shadow-[0_0_35px_rgba(168,85,247,0.5)]"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-gray-600 hover:border-purple-400 transition"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
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
