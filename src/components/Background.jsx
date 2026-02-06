import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Gradient blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[700px] h-[700px]
        bg-purple-600/25 rounded-full blur-[180px]"
      />

      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px]
        bg-indigo-600/20 rounded-full blur-[180px]"
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168,85,247,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168,85,247,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default Background;
