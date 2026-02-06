import { motion } from "framer-motion";

const education = [
  {
    degree: "B.E. in Computer Science Engineering",
    institute: "Chandigarh University, Mohali, Punjab",
    duration: "2022 – 2026",
    score: "CGPA: 8.43",
    details:
      "Pursuing a Bachelor's degree with a strong focus on core computer science subjects such as Data Structures, Algorithms, Operating Systems, DBMS, and Software Engineering, along with hands-on full-stack and blockchain projects.",
  },
  {
    degree: "Class XII (CBSE)",
    institute: "New Happy Public School, Yamunanagar, Haryana",
    duration: "2021 – 2022",
    score: "Percentage: 90.5%",
    details:
      "Completed senior secondary education with a strong academic foundation in Mathematics and Science.",
  },
  {
    degree: "Class X (CBSE)",
    institute: "BCM Senior Secondary School, Ludhiana, Punjab",
    duration: "2019 – 2020",
    score: "Percentage: 91.5%",
    details:
      "Built a solid academic base with emphasis on Mathematics, Science, and logical reasoning.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen px-8 md:px-20 py-32 overflow-hidden"
    >
      {/*Background Motion*/}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[240px]"
        initial={{ x: -300, y: 100 }}
        animate={{ x: [-300, 200, -300], y: [100, -150, 100] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[220px]"
        initial={{ x: 300, y: -200 }}
        animate={{ x: [300, -200, 300], y: [-200, 150, -200] }}
        transition={{ duration: 65, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/*Heading*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-purple-500">Academics</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            My academic journey that built a strong foundation in computer science
            and problem-solving.
          </p>
        </motion.div>

        {/* Timeline*/}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-purple-500/20" />

          <div className="space-y-20">
            {education.map((item, index) => (
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
                {/* Content Card */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:pr-20"
                      : "md:pl-20 md:col-start-2"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="bg-[#0b0b0b] border border-gray-700 rounded-2xl p-8
                    shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                  >
                    <span className="text-xs uppercase tracking-wide text-purple-400">
                      {item.duration}
                    </span>

                    <h3 className="text-lg font-semibold mt-2 mb-1">
                      {item.degree}
                    </h3>

                    <p className="text-sm text-gray-400 mb-1">
                      {item.institute}
                    </p>

                    <p className="text-sm text-purple-400 mb-4">
                      {item.score}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-10 -translate-x-1/2">
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

export default Education;
