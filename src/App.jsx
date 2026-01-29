/**
 * App - Main composition of all sections
 * 
 * Simple, clean structure - each section is self-contained
 * No routing needed for single-page portfolio
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
    <div className="min-h-screen">
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
