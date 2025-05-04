import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./Navbar";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import TechnologySection from "./sections/TechnologySection";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="m-portfolio-ui-theme">
      <div className="px-4 sm:px-10 md:px-20">
        <Navbar />
        <div className="pt-32">
          <HeroSection />
        </div>
        <ExperienceSection />
        <ProjectSection />
        <TechnologySection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
