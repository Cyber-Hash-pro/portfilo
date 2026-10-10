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
import MouseFollower from "./components/ui/MouseFollower";
import ProfileAvatar from "./components/ui/ProfileAvatar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Custom Mouse Follower */}
      {!isLoading && <MouseFollower />}

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
        
        {/* Floating Avatar Assistant */}
        <div className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 animate-fade-in-up animation-delay-500 pointer-events-auto">
          <ProfileAvatar className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default App;
