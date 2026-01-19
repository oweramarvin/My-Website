import Navigation from "../components/layout/Navigation";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import WorkExperience from "../components/sections/WorkExperience";
import Skills from "../components/sections/Skills";
import FunFacts from "../components/sections/FunFacts";
import Projects from "../components/sections/Projects";
import Resume from "../components/sections/Resume";
import NiceToHave from "../components/sections/NiceToHave";
import Contact from "../components/sections/Contact";
import BackToTop from "../components/ui/BackToTop";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <WorkExperience />
      <Skills />
      <FunFacts />
      <Projects />
      <Resume />
      <NiceToHave />
      <Contact />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Marvin Owera. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
