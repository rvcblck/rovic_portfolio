import { motion } from "framer-motion";
import avatar from "@/assets/avatar.jpg";

const timeline = [
  {
    role: "Mid-Level Software Engineer",
    company: "Radius Telecoms",
    period: "Jul 2025 — Present",
    points: [
      "Develop company website using Salesforce",
      "Build PLDT Red Fiber landing pages on ServiceNow",
      "Engineer enterprise tools & AI automations",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    period: "Feb 2024 — Jun 2025",
    points: [
      "Designed & implemented web apps in Angular, React, Vue, Laravel",
      "Led multiple projects from concept to deployment",
      "Maintained & optimized existing applications",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "JE-310 Solution Inc.",
    period: "May 2023 — Feb 2024",
    points: [
      "Built dynamic web apps with modern frameworks",
      "Managed & optimized client databases",
      "Delivered solutions exceeding client requirements",
    ],
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left: portrait + bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-5"
          >
            <p className="mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              [ 03 ] — About
            </p>
            <div className="aspect-square w-full max-w-md surface rounded-sm overflow-hidden mb-8 relative">
              <img
                src={avatar}
                alt="Rovic De Leon — full-stack web developer monogram"
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>RD / 1998</span>
                <span>v2026</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm Rovic — a Bulacan-based engineer who treats every project like a craft.
              From enterprise Salesforce builds to scrappy freelance MVPs, I focus on shipping
              fast without cutting corners.
            </p>
          </motion.div>

          {/* Right: timeline */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display-text text-5xl md:text-6xl mb-12">
              Trajectory<span className="text-primary">.</span>
            </h2>
            <div className="space-y-px bg-border">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-background p-6 lg:p-8 group hover:bg-card transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                    <h3 className="display-text text-2xl lg:text-3xl">
                      {t.role}
                    </h3>
                    <span className="mono text-xs uppercase tracking-wider text-muted-foreground">
                      {t.period}
                    </span>
                  </div>
                  <p className="mono text-sm text-primary mb-4">@ {t.company}</p>
                  <ul className="space-y-2">
                    {t.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mono shrink-0">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-background p-6 lg:p-8"
              >
                <p className="mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Education / 2019 — 2023
                </p>
                <h3 className="display-text text-2xl">Bulacan State University</h3>
                <p className="mono text-sm text-primary mt-1">B.S. — College</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
