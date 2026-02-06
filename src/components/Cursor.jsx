import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }, []);

  return (
    <div
      id="cursor"
      className="fixed w-6 h-6 rounded-full bg-purple-500/60
      blur-md pointer-events-none z-[9999]"
    />
  );
};

export default Cursor;
