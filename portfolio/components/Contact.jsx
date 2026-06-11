import { Github, Linkedin, Mail, Send } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "nazifafairuz@example.com",
    href: "mailto:nazifafairuz@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "nazifa-fairuz-zuthi",
    href: "https://www.linkedin.com/in/nazifa-fairuz-zuthi/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "ZohanaZuthi",
    href: "https://github.com/ZohanaZuthi",
    icon: Github,
  },
  {
    label: "Telegram",
    value: "Nazifa_Fairuz_Zuthi",
    href: "https://t.me/Nazifa_Fairuz_Zuthi",
    icon: Send,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Let&apos;s build something useful.</h2>
              <p className="mt-4 text-sm leading-6 text-white/65">
                I&apos;m open to internships, collaborative projects, AI/ML ideas, and full-stack development work.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-4 transition hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-black">
                      <Icon size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{item.label}</span>
                      <span className="block truncate text-sm text-white/60">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
