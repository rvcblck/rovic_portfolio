import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Work } from "@/components/portfolio/Work";
import { Stack } from "@/components/portfolio/Stack";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Rovic De Leon — Full-Stack Web Developer";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Portfolio of Rovic De Leon — a Bulacan-based full-stack web developer building enterprise tools, AI automations, and modern web apps with React, Vue, Angular & Laravel.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
