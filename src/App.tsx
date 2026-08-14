import { BUILDER, CREATIVITY, RESEARCH } from "@/content/work";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { WorldIntro } from "@/components/portfolio/WorldIntro";
import { Territory } from "@/components/portfolio/Territory";
import { Connection } from "@/components/portfolio/Connection";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Nav />
      <main className="w-full">
        <Hero />
        <WorldIntro />
        <Territory data={BUILDER} />
        <Territory data={RESEARCH} mirrored />
        <Territory data={CREATIVITY} />
        <Connection />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
