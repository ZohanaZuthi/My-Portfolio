import Image from "next/image";
import { ArrowUpRight, BrainCircuit, Database, ExternalLink, Sparkles } from "lucide-react";
import image1 from "../public/image.png";
const projects = [
  {
    title: "AI Assistive Technology",
    category: "Machine Learning",
    description:
      "An ML-focused concept for building more accessible support tools with NLP, classification, and practical user flows.",
    stack: ["Python", "NLP", "TensorFlow"],
    href: "https://github.com/ZohanaZuthi",
    icon: BrainCircuit,
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
    pattern: "AI",
  },
  {
    title: "Frontend Web App",
    category: "Landing Page",
    description:
      "Responsive web application work combining reusable React interfaces, API logic, and clean dashboard-style pages.",
    stack: ["Next.js", "React", "Django"],
    href: "https://roof-utuu.vercel.app/",
    image: image1,
    accent: "from-rose-400 via-fuchsia-500 to-violet-500",
    pattern: "WEB",
  },
  {
    title: "Data Science Analysis",
    category: "Data Science",
    description:
      "Exploratory data analysis and prediction workflow using notebooks, visualizations, and repeatable model experiments.",
    stack: ["Pandas", "Scikit-learn", "Matplotlib"],
    href: "https://github.com/ZohanaZuthi",
    icon: Database,
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
    pattern: "DATA",
  },
  {
    title: "Waste2Wealth",
    category: "Social Innovation",
    description:
      "A product and campaign idea focused on turning plastic waste into useful items with sustainable community impact.",
    stack: ["Leadership", "Design", "Research"],
    href: "https://github.com/ZohanaZuthi",
    icon: Sparkles,
    accent: "from-amber-300 via-orange-500 to-red-500",
    pattern: "IMPACT",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
              Selected Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Projects</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/65 md:text-right">
            Click any project card to open the work. Replace the links with each live demo or GitHub repo when you publish them.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className={`relative min-h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={project.title === "Full Stack Web App"}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_28%),linear-gradient(135deg,rgba(0,0,0,0.12),rgba(0,0,0,0.45))]" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs font-medium backdrop-blur">
                    {Icon ? <Icon size={15} /> : null}
                    {project.category}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <span className="text-5xl font-black tracking-normal text-white/20 md:text-6xl">
                      {project.pattern}
                    </span>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-black transition group-hover:rotate-45">
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ExternalLink className="mt-1 shrink-0 text-white/45 transition group-hover:text-white" size={18} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
