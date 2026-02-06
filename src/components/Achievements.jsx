import { motion } from "framer-motion";

const achievements = [
  {
    title: "Top 1% Performer – NPTEL",
    description:
      "Ranked in the top 1% in the NPTEL course on Cloud, IoT, Edge, and Machine Learning, demonstrating strong conceptual understanding and consistency.",
  },
  {
    title: "Top 5 Finalist – Bug Battle Royale",
    description:
      "Secured a top 5 position in a university-level competitive debugging event, showcasing analytical thinking and problem-solving skills.",
  },
  {
    title: "500+ DSA Problems Solved",
    description:
      "Solved over 500 Data Structures and Algorithms problems across platforms such as LeetCode and GeeksforGeeks, strengthening core CS fundamentals.",
  },
  {
    title: "Blockchain Certifications",
    description:
      "Completed blockchain and Ethereum training programs, including Metacrafters, gaining hands-on exposure to smart contracts and Web3 concepts.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative min-h-screen px-8 md:px-20 py-32 overflow-hidden"
    >
      {/*BACKGROUND*/}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[240px]"
        initial={{ x: -300, y: -100 }}
        animate={{ x: [-300, 200, -300], y: [-100, 200, -100] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[220px]"
        initial={{ x: 300, y: 200 }}
        animate={{ x: [300, -200, 300], y: [200, -150, 200] }}
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
            Achievements &{" "}
            <span className="text-purple-500">Milestones</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Highlights that reflect my learning journey, consistency, and
            technical growth over time.
          </p>
        </motion.div>

        {/*TIMELINE*/}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-purple-500/20" />

          <div className="space-y-20">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9 }}
                className={`relative grid md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {/* Left / Right Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:pr-20" : "md:pl-20 md:col-start-2"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="bg-[#0b0b0b] border border-gray-700 rounded-2xl p-8
                    shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2">
                  <span className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.9)] block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Achievements;
