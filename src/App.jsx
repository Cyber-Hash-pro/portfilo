/**
 * App - Main composition of all sections
 * MagicTeal inspired portfolio for Nilesh Patil
 * Full-Stack & AI Developer
 */

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Capabilities from "./components/sections/Capabilities";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />

      <main>
        <Intro />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
