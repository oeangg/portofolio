import { AboutSection } from "../components/about/about";
import { ContactIndex } from "../components/contact/contactIndex";
import { IntroSection } from "../components/hero/heroIndex";
import { ProjectSection } from "../components/project/project-index";
import { TechStackSection } from "../components/skills/skillIndex";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <IntroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectSection />
      <ContactIndex />
    </main>
  );
}
