import { Download } from "lucide-react";

const details = [
  ["Birthday", "17.05.2003"],
  ["Address", "Rajshahi, Bangladesh"],
  ["Email", "nazifafairuz@example.com"],
  ["Phone", "+880 1837792890"],
  ["Nationality", "Bangladeshi"],
  ["Study", "B.Sc. in CSE"],
  ["Interest", "AI / ML"],
  ["Freelance", "Available"],
];

const education = [
  {
    year: "2021-2027",
    title: "Rajshahi University of Engineering and Technology",
    subtitle: "B.Sc. in Computer Science and Engineering.",
  },
  {
    year: "2019-2021",
    title: "Carmichael College, Rangpur",
    subtitle: "Higher Secondary Certificate (HSC).",
  },
  {
    year: "2013-2019",
    title: "Yakubia Girls' High School, Bogura",
    subtitle: "Secondary School Certificate (SSC).",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
              About
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">About Me</h2>
            <p className="mt-5 text-sm leading-7 text-white/70 md:text-base">
              Hi, I am Nazifa Fairuz Zuthi, a passionate full-stack developer with a strong focus on AI and Machine Learning. I enjoy creating responsive web applications, working with data, and exploring practical AI use cases.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
              I am currently working as an Aspire Full Stack and AI-ML Developer intern while pursuing a B.Sc. in Computer Science and Engineering. I am especially interested in assistive technology, NLP, data science, and competitive programming.
            </p>

            <a href="/CV.pdf" download className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100">
              <Download size={17} />
              Download CV
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map(([label, value]) => (
                <div key={label} className="rounded-md bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">{label}</p>
                  <p className="mt-2 break-words text-sm font-medium text-white/85">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-semibold">Education</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                  {item.year}
                </span>
                <h4 className="mt-4 font-semibold leading-6">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
