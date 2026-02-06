import { motion } from "framer-motion";
import { FaCode, FaServer, FaCube, FaPencilAlt } from "react-icons/fa";

const focusAreas = [
  {
    icon: <FaCode />,
    title: "Frontend",
    desc: "Building clean, responsive interfaces with subtle motion and clarity.",
  },
  {
    icon: <FaServer />,
    title: "Backend",
    desc: "Designing REST APIs, authentication flows, and scalable data models.",
  },
  {
    icon: <FaCube />,
    title: "Blockchain",
    desc: "Exploring smart contracts, Ethereum, and Web3 fundamentals.",
  },
  {
    icon: <FaPencilAlt />,
    title: "Creativity",
    desc: "Pencil sketching as a personal creative outlet.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-8 md:px-20 py-32 overflow-hidden"
    >
      {/*BACKGROUND*/}

      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[220px]"
        initial={{ x: -300, y: 200 }}
        animate={{ x: [-300, 100, -300], y: [200, -100, 200] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[200px]"
        initial={{ x: 300, y: -200 }}
        animate={{ x: [300, -150, 300], y: [-200, 150, -200] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />

      {/*CONTENT*/}

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/*LEFT*/}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          {/*Accent*/}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="h-1 bg-purple-500 rounded-full mb-6"
          />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-purple-400 mb-6">
            Developer with a strong foundation in computer science.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a Computer Science student focused on building reliable,
            well-structured software across the full stack, with emphasis on
            clean architecture and maintainable code.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I enjoy working on backend systems, REST APIs, authentication, and
            modern frontends that balance usability with thoughtful animations.
          </p>
        </motion.div>

        {/*RIGHT*/}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-[#0b0b0b] border border-gray-700 rounded-2xl p-10
            shadow-[0_0_45px_rgba(168,85,247,0.18)]"
          >
           {/*Offset depth border*/}
            <div className="absolute inset-0 rounded-2xl border border-gray-600 translate-x-2 translate-y-2 -z-10" />

            <h3 className="text-xl font-semibold mb-8">
              What I Focus On
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 items-start group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="text-purple-400 text-xl mt-1"
                  >
                    {item.icon}
                  </motion.div>

                  <div>
                    <h4 className="text-sm font-semibold mb-1 group-hover:text-purple-400 transition">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/*Bottom fade*/}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default About;
