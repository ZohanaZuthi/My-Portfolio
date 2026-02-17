"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, User, Briefcase, Mail, Layers, Star, Hammer,Menu} from "lucide-react";


const ICONS={Home, User, Briefcase, Mail, Layers, Star, Hammer};

const links = [
  { label: "Home", href: "#home", icon:"Home" },
  { label: "About", href: "#about",icon: "User" },
  { label: "Skills", href: "#skills",icon:"Hammer" },
  { label: "Experience", href: "#experience",icon:"Layers" },
  { label: "Projects", href: "#projects",icon:"Briefcase" },
  { label: "Contacts", href: "#contact",icon:"Mail" },
  { label: "EAs", href: "#eas",icon:"Star" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="fixed top-5 z-50 w-full h-screen">
      <nav className="flex max-w-7xl items-start justify-between px-4">
        <div className="flex items-start gap-6">
        <div className="text-white  font-semibold left-0 tracking-wide">My Portfolio</div>
        <ul className={`${open ? "flex" : "hidden"} md:flex flex-col text-1xl  mt-40  gap-8  border-l-0 bg-black/30  text-white/80 backdrop-blur`}>
        {links.map((l)=>{ const Icon=ICONS[l.icon];
          return(
          <li key={l.href}><a href={l.href}  className="hover:text-white transition-colors "><Icon className="inline mr-2 w-4 h-4" />{l.label}</a></li>);})}

        </ul>
        </div>

         
        <button
          onClick={toggleMenu}
          className="md:hidden rounded-2xl border border-white/15 bg-black/40 p-2 text-white backdrop-blur"><Menu />
          </button>
          
      </nav> 

    
    </header>
  );
}
