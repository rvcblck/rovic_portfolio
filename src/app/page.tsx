import Contact from "@/components/Contact/contact";
import Education from "@/components/Education/education";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/hero";
import Projects from "@/components/Projects/projects";
import TechStack from "@/components/TechStack/techstack";
import Experience from "@/components/WorkExperience/experience";
import BottomProfile from "@/components/BottomProfile/bottom-profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pages-wrapper">
      <Hero></Hero>
      <TechStack></TechStack>
      <Projects></Projects>
      <Education></Education>
      <Experience></Experience>
      <Contact></Contact>
      <BottomProfile></BottomProfile>
      <Footer></Footer>
    </div>
  );
}
