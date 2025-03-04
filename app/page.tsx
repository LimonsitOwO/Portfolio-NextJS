import { Navbar } from "@/components/ui";
import { AboutMe, Experience, Hero, Services } from "./components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Experience />
    </main>
  );
}
