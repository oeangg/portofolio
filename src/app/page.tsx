import { AboutSection } from "../components/about/about";
import { IntroSection } from "../components/homepage/hero/hero-index";
import { ProjectSection } from "../components/homepage/project/project-index";
import { TechStackSection } from "../components/homepage/skills/skill-index";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <IntroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectSection />
    </main>
  );
}
