import { useEffect, useState } from "react";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactFooter } from "./components/ContactFooter";
import { ExperienceSection } from "./components/ExperienceSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResearchSection } from "./components/ResearchSection";
import { SkillsSection } from "./components/SkillsSection";

export function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <main>
        <Hero />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
