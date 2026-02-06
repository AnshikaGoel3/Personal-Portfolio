import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" }, 
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  //ACTIVE SECTION 
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // SCROLL EFFECT
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`relative flex items-center gap-10 px-10 py-4 rounded-full
        backdrop-blur-xl transition-all
        ${
          scrolled
            ? "bg-[#0b0b0b]/90 border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            : "bg-[#0b0b0b]/70 border border-gray-700 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
        }`}
      >
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={`relative px-1 text-sm font-medium transition-colors
              ${
                active === link.id
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              }`}
          >
            {link.name}

            {/* Active pill */}
            {active === link.id && (
              <motion.span
                layoutId="nav-pill"
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className="absolute inset-x-[-8px] -bottom-2 h-[26px]
                rounded-full bg-purple-500/10 -z-10"
              />
            )}

            {/* Underline */}
            {active === link.id && (
              <motion.span
                layoutId="nav-indicator"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2
                w-6 h-[3px] rounded-full bg-purple-500"
              />
            )}
          </button>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
