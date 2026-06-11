import HomeSection from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-w-[280px] w-full pl-20 pr-4 sm:pr-6 md:pl-24 md:pr-10 lg:px-24">
        <HomeSection />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
