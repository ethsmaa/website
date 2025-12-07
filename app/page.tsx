import { Navbar } from "../src/components/Navbar";
import { Skills } from "@/src/components/Skills";
import { Projects } from "@/src/components/Projects";
import { Email } from "@/src/components/Email";
import { Footer } from "@/src/components/Footer";
import HeroClient from "@/src/components/HeroClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-primary-100 via-secondary-200 to-primary-100">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroClient />
        <Skills />
        <Projects />
        <Email />
      </div>
      <Footer />
    </main>
  );
}
