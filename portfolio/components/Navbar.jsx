"use client";

import { useState } from "react";
import Image from "next/image";
import {Briefcase, Mail, Layers, Hammer} from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";


const links = [
  { label: "Home", href: "#home", icon:<IoHomeOutline size={22} />},
  { label: "About", href: "#about",icon:<FaUserCircle size={22} /> },
  { label: "Skills", href: "#skills",icon:<Hammer size={20} /> },
  { label: "Experience", href: "#experience",icon:<Layers size={20} /> },
  { label: "Projects", href: "#projects",icon:<Briefcase size={20} /> },
  { label: "Contacts", href: "#contact",icon:<Mail size={20} /> },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={`fixed left-0 top-0 z-50 flex h-screen ${open ? "w-64" : "w-16"} flex-col border-r border-white/10 bg-black/75 text-white backdrop-blur duration-300`}>
      <div className="px-3 py-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 overflow-hidden"> 
        <div className={`relative ${open? "w-9":"w-0"} h-9 duration-300`}>
          <Image src="/profile.JPG" alt="profile" fill className="rounded-full object-cover" priority/></div>
        <div className={`relative ${open? "opacity-100":"opacity-0 w-0"} duration-300`}>
         <p className="font-semibold leading-4">My Portfolio</p>
         <span className="text-xs text-white/70">Nazifa Fairuz Zuthi</span>

        </div>
      </div>

      <button onClick={toggleMenu} className="p-1 cursor-pointer rounded-md hover:bg-white/10 transition" aria-label="Toggle Sidebar">
       <MdMenuOpen size={30} className={`duration-300 ${!open? "rotate-180" : ""}`}></MdMenuOpen>
      </button>

      </div>
      <ul className="flex-1 px-2">
        {links.map((item)=>(
          <li key={item.href} className="my-2 rounded-md hover:bg-white/10 transition group relative">
          <a href={item.href} className="flex items-center gap-3 px-3 py-2">
            <div className="shrink-0">{item.icon}</div>
            <p className={`${!open?"w-0 opacity-0 translate-x-6":"w-auto opacity-100 translate-x-0"} duration-300 overflow-hidden whitespace-nowrap`}>
              {item.label}
            
            </p> 
            <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}>{item.label}</p>


            </a></li>
            
        ))}

      </ul>
       <div className="px-3 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <FaUserCircle size={28} className="shrink-0" />

          <div
            className={`${!open ? "w-0 opacity-0 translate-x-6" : "w-auto opacity-100 translate-x-0"} duration-300 overflow-hidden`}>            <p className="leading-4 font-medium">Nazifa</p>
            <span className="text-xs text-white/70">nazifafairuzzuthi@email.com</span>
          </div>
    
        </div>
       
      </div>

      
      
    </header>
  );
}
