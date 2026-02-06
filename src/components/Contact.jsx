import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    value: "goelanshika73@gmail.com",
    link: "mailto:goelanshika73@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anshika-goel",
    link: "https://www.linkedin.com/in/anshika-goel-7a29a224a/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/AnshikaGoel3",
    link: "https://github.com/AnshikaGoel3",
    icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-8 md:px-20 py-32 overflow-hidden"
    >
      {/*BACKGROUND*/}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[240px]"
        initial={{ x: 300, y: -200 }}
        animate={{ x: [300, -200, 300], y: [-200, 150, -200] }}
        transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[220px]"
        initial={{ x: -300, y: 200 }}
        animate={{ x: [-300, 200, -300], y: [200, -150, 200] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/*HEADING*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s <span className="text-purple-500">Connect</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            I’m open to internships, projects, and meaningful learning
            opportunities. If you’d like to collaborate or simply connect,
            I’d love to hear from you.
          </p>
        </motion.div>

        {/*CONTACT CARDS*/}
        <div className="grid md:grid-cols-3 gap-12">
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                whileHover="hover"
                className="relative group rounded-2xl p-8
                bg-[#0b0b0b] border border-gray-700
                shadow-[0_0_35px_rgba(168,85,247,0.18)]
                overflow-hidden"
              >
                {/* Glow bloom */}
                <motion.div
                  variants={{ hover: { opacity: 1, scale: 1.25 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-purple-600/25 blur-3xl"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  >
                    <Icon className="text-3xl text-purple-400" />
                  </motion.div>

                  <span className="text-sm font-medium text-gray-300">
                    {item.label}
                  </span>

                  <span className="text-xs text-gray-500">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/*CLOSING LINE*/}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 text-sm text-gray-500"
        >
          Always happy to connect, collaborate, and grow 🚀
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Contact;
