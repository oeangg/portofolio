import { AboutSection } from "../components/about/about";
import { ContactSection } from "../components/contact/contactIndex";
import { IntroSection } from "../components/hero/heroIndex";
import { ProjectSection } from "../components/project/projectIndex";
import { TechStackSection } from "../components/skills/skillIndex";
import { WorkExperienceSection } from "../components/works/workIndex";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <IntroSection />
      <AboutSection />
      <TechStackSection />
      <WorkExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
