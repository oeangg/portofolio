import { HeroSection } from "@/components/homepage/hero/hero-index";
import { LearnSection } from "@/components/homepage/learning/learn-index";
import { ProjectSection } from "@/components/homepage/project/project-index";
import { TechStackSection } from "@/components/homepage/tech/tech-index";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <main className="flex flex-col gap-32">
        <TechStackSection />
        <ProjectSection />
        <LearnSection />
      </main>
    </section>
  );
}
