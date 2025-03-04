import { Navbar } from "@/components/ui";
import { AboutMe, Experience, Hero, Services } from "./components";
import Knowledge from "./components/Knowledge";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Experience />
      <Knowledge />
    </main>
  );
}
