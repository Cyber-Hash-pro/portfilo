/**
 * App - Main composition of all sections
 * MagicTeal inspired portfolio for Nilesh Patil
 * Full-Stack & AI Developer
 */

import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Capabilities from "./components/sections/Capabilities";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* Main Content */}
      <div className={`min-h-screen bg-dark transition-opacity duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}>
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
    </>
  );
}

export default App;
