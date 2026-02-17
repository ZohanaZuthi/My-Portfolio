"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Briefcase, Mail, Layers, Star,Hammer} from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMenuOpen, MdOutlineDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";


const links = [
  { label: "Home", href: "#home", icon:<IoHomeOutline size={22} />},
  { label: "About", href: "#about",icon:<FaUserCircle size={22} /> },
  { label: "Skills", href: "#skills",icon:<Hammer size={20} /> },
  { label: "Experience", href: "#experience",icon:<Layers size={20} /> },
  { label: "Projects", href: "#projects",icon:<Briefcase size={20} /> },
  { label: "Contacts", href: "#contact",icon:<Mail size={20} /> },
  { label: "EAs", href: "#eas",icon:<Star size={20} /> },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={`fixed left-0 top-0 z-50 h-screen ${open?"w-64":"w-16"} duration-300 bg-black/70 backdrop-blur text-whitee border-rwhite/10 flex flex-col`}>
      <div className="px-3 py-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 overflow-hidden"> 
        <div className={`relative ${open? "w-9":"w-0"} h-9 duration-300`}>
          <Image src="/profile.jpg" alt="profile" fill className="rounded-full object-cover" priority/></div>
        <div className={`relative ${open? "opacity-100":"opacity-0 w-0"} duration-300`}>
         <p className="font-semibold leading-4">My Portfolio</p>
         <span className="text-xs text-white/70">Nazifa Fairuz Zuthi</span>

        </div>
      </div>

      <button onClick={toggleMenu} className="p-1 rounded-md hover:bg-white/10 transition" aria-label="Toggle Sidebar">
       <MdMenuOpen size={30} className={`duration-300 ${!open? "rotate-180":""}`}></MdMenuOpen>
      </button>
      </div>
      
    </header>
  );
}
