import { Navbar } from "@/components/ui";
import { AboutMe, Experience, Hero, Knowledge, Services, Technologies } from "./components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Experience />
      <Knowledge />
      <Technologies />
    </main>
  );
}
