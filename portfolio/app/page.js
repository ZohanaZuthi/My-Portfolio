import HomeSection from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-10 lg:px-16 min-w-[280px] max-w-10xl w-full mx-auto">
        <HomeSection />
       
      </main>
    </>
  );
}
