import { BadgeCheck, Brush, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const experiences = [
  {
    role: "QA Tester at CodeStudio",
    place: "CodeStudio",
    time: "Current",
    description:
      "Testing apps with its api using postman, update current progress to the developers",
    highlights: ["Postman", "ThunderClient"],
    icon: Rocket,
  },
  {
    role: "CodeStudio Research Lab",
    place: "CodeStudio",
    time: "Current",
    description:
      "Building Projects , rag model and novel research in cse fields",
    highlights: ["Next.js interfaces", "API thinking", "AI/ML practice"],
    icon: Rocket,
  },
  {
    role: "Full Stack & AI-ML Developer Intern",
    place: "Aspire",
    time: "Current",
    description:
      "Building practical full-stack features while exploring AI/ML workflows, model integration, and production-minded development.",
    highlights: ["Next.js interfaces", "API thinking", "AI/ML practice"],
    icon: Rocket,
  },
  {
    role: "Volunteer Teacher",
    place: "Shopnochui",
    time: "Community",
    description:
      "Supported underprivileged children through teaching, mentoring, and consistent learning encouragement.",
    highlights: ["Teaching", "Communication", "Social impact"],
    icon: GraduationCap,
  },
  {
    role: "Question Maker",
    place: "Private Coaching Center",
    time: "Academic",
    description:
      "Created exam questions and practice materials designed to test concepts clearly and help students prepare with confidence.",
    highlights: ["Problem design", "Documentation", "Evaluation"],
    icon: BadgeCheck,
  },
  {
    role: "Head of Designing Team",
    place: "Project Tersus",
    time: "Campaign",
    description:
      "Led design work for a campaign against growing plastic waste in Bangladesh, shaping visuals and awareness materials.",
    highlights: ["Visual design", "Teamwork", "Awareness campaign"],
    icon: Brush,
  },
  {
    role: "CMO & Co-Founder",
    place: "Project Waste2Wealth",
    time: "Startup Idea",
    description:
      "Worked on a social innovation initiative focused on turning plastic waste into valuable, usable products.",
    highlights: ["Leadership", "Strategy", "Sustainability"],
    icon: Lightbulb,
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
              Journey
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Experience</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/65 md:text-right">
            A mix of engineering, teaching, design leadership, and impact-focused work.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />
          <div className="space-y-5">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.role}-${item.place}`}
                  className="group relative grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] md:ml-14 md:grid-cols-[1fr_auto] md:p-6"
                >
                  <div className="absolute -left-14 top-6 hidden h-10 w-10 place-items-center rounded-full border border-white/10 bg-black md:grid">
                    <Icon size={18} className="text-cyan-200" />
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                        {item.time}
                      </span>
                      <span className="text-sm text-white/55">{item.place}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">{item.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:max-w-56 md:justify-end md:self-end">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
