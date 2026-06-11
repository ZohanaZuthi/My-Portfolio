"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download, Facebook, Github, Mail, Send, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="flex min-h-screen items-center text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 py-20 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center md:justify-start">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-2xl shadow-cyan-500/10 md:h-80 md:w-80">
            <Image src="/profile.JPG" alt="Nazifa Fairuz Zuthi" fill className="object-cover" priority />
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
            Full Stack Developer
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Nazifa Fairuz Zuthi</h1>
          <div className="min-h-10 text-2xl text-white/85 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1200,
                "Next.js Builder",
                1200,
                "Go and Django Builder",
                1200,
                "LLM Enthusiast",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            AI and Machine Learning enthusiast with full-stack development experience, a strong CSE foundation, and a love for building useful products with clean interfaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100">
              View Projects
            </a>
            <a href="/CV.pdf" download className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <Download size={17} />
              Download CV
            </a>
          </div>

          <div className="flex flex-row gap-3">
            <a aria-label="Facebook" href="https://www.facebook.com/huruzoo77.56" target="_blank" rel="noopener noreferrer"><Facebook className="transition hover:text-blue-500" /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/nazifa-fairuz-zuthi/" target="_blank" rel="noopener noreferrer"><Linkedin className="transition hover:text-blue-400" /></a>
            <a aria-label="Email" href="mailto:nazifafairuz@example.com"><Mail className="transition hover:text-red-400" /></a>
            <a aria-label="Telegram" href="https://t.me/Nazifa_Fairuz_Zuthi" target="_blank" rel="noopener noreferrer"><Send className="transition hover:text-cyan-400" /></a>
            <a aria-label="GitHub" href="https://github.com/ZohanaZuthi" target="_blank" rel="noopener noreferrer"><Github className="transition hover:text-gray-400" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
