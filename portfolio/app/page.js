import HomeSection from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-10 lg:px-16 min-w-[280px]  w-full mx-auto">
        <HomeSection />
        <About/>
       
      </main>
    </>
  );
}
