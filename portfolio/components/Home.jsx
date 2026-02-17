"use client";

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { Facebook,Github,Mail,Send,Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="mt-30 mx-40 flex items-center justify-center  text-white px-4 sm:px-6 md:px-10" >
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="flex justify-center md:justify-center">
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#5C2C26" d="M52.4,-18.9C58.1,0.7,46.3,24.1,26.2,39.4C6.2,54.8,-22.1,62.1,-38.3,50.8C-54.5,39.5,-58.7,9.5,-50.3,-13.6C-41.9,-36.8,-20.9,-53.2,1.2,-53.6C23.3,-54,46.7,-38.4,52.4,-18.9Z" transform="translate(100 100)" />
</svg> */}
          <div className="relative  h-50 w-50 rounded-full overflow-hidden md:h-80 md:w-80">
              <Image src="/profile.jpg" alt="Profile"  width={542} height={500} className="object-cover absolute -inset-6 rounded-full " priority/>
            
          </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex text-4xl">Nazifa Fairuz Zuthi</div>
         <div className="flex  w-[30ch] md:w-[35ch] text-center md:text-left ">
          
           <TypeAnimation
      sequence={[
          "Full-Stack Developer",
          1200,
          "Next.js Builder",
          1200,
          "GO and Django Builder",
          1200,
          "LLM Enthusiast",
          1200,
        ]}
      wrapper="span"
      speed={50}
      className="text-2xl md:text-3xl"
      repeat={Infinity}
    /></div>
    {/* <div>I am currently working as an Aspire Full stack and AI-ML Developer (intern). I am AI & Machine Learning 
enthusiast with a strong foundation in Machine Learning, Natural Language Processing, and Data Science, 
currently pursuing a B.Sc. in Computer Science and Engineering. Experienced in end-to-end ML projects and 
competitive programming. Passionate about innovative AI applications, especially in assistive technologies, and 
competitive programming driven by a desire for continuous learning and impactful contributions.</div> */}

<div className="flex flex-row gap-3">
  <Facebook />
  <Linkedin />
  <Mail />
  <Send />
  <Github />


</div>


    </div>

    </div>
    </section>
  );
}
