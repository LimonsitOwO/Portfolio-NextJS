import { Footer, Navbar } from "@/components/ui";
import { AboutMe, ContactMe, Experience, Hero, Knowledge, Services, Technologies } from "./components";

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
      <ContactMe />
      <Footer />
    </main>
  );
}
