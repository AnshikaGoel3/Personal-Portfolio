import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Background from "./components/Background";

import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative bg-[#050505] text-white overflow-x-hidden">
      <Background />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
