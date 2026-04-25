import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "Red Fiber Landing Pages",
    client: "PLDT × Radius Telecoms",
    year: "2025",
    tags: ["ServiceNow", "Frontend", "Enterprise"],
    desc: "Built high-traffic postpaid & prepaid acquisition pages on ServiceNow for PLDT's flagship Red Fiber product line.",
  },
  {
    no: "02",
    title: "Enterprise Internal Tools",
    client: "Radius Telecoms",
    year: "2025",
    tags: ["Salesforce", "Automation", "AI"],
    desc: "Designed and shipped Salesforce-native tooling and AI automations that streamline ops for cross-functional teams.",
  },
  {
    no: "03",
    title: "Freelance Web Apps",
    client: "Independent Clients",
    year: "2024 – 2025",
    tags: ["Angular", "React", "Vue", "Laravel"],
    desc: "Led 10+ projects from concept to deployment — full-stack delivery with focus on performance, security, and UX.",
  },
  {
    no: "04",
    title: "Dynamic Client Platforms",
    client: "JE-310 Solution Inc.",
    year: "2023 – 2024",
    tags: ["Next.js", "Laravel", "MySQL"],
    desc: "Engineered modern web platforms and tuned databases for reliability — consistently exceeded client requirements.",
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              [ 01 ] — Selected Work
            </p>
            <h2 className="display-text text-5xl md:text-7xl">
              Things I've<br />shipped<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground max-w-xs">
            // A snapshot of recent engagements across enterprise & independent work
          </p>
        </div>

        <div className="border-t border-border">
          {projects.map((p, i) => (
            <motion.a
              key={p.no}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group block border-b border-border py-8 lg:py-10 hover:bg-card/50 transition-colors duration-500 -mx-6 lg:-mx-10 px-6 lg:px-10"
            >
              <div className="grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-2 lg:col-span-1 mono text-sm text-muted-foreground">
                  {p.no}
                </span>
                <div className="col-span-10 lg:col-span-5">
                  <h3 className="display-text text-3xl lg:text-5xl group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 mono text-xs uppercase tracking-wider text-muted-foreground">
                    {p.client} — {p.year}
                  </p>
                </div>
                <p className="hidden lg:block col-span-4 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <div className="hidden lg:flex col-span-2 justify-end items-center gap-3">
                  <div className="flex flex-wrap gap-1 justify-end">
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-6 h-6 group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
