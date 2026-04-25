import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React / Next.js", "Vue / Nuxt", "Angular", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Laravel / PHP", "CodeIgniter", "Node.js", "MySQL", "SQL Server", "REST APIs"],
  },
  {
    title: "Platforms",
    items: ["Salesforce", "ServiceNow", "SaaS", "Docker", "Git", "AI Automations"],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="relative py-24 lg:py-40 bg-card border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              [ 02 ] — Toolkit
            </p>
            <h2 className="display-text text-5xl md:text-7xl">
              The stack<br />I build with<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 lg:col-start-8 text-base text-muted-foreground leading-relaxed self-end">
            Polyglot by design. I pick the right framework for the job — but I'm fastest in the
            JavaScript &amp; PHP ecosystems, with deep enterprise experience on Salesforce and
            ServiceNow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 lg:p-10"
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="mono text-xs text-primary">0{i + 1}</span>
                <span className="mono text-xs uppercase tracking-wider text-muted-foreground">
                  / {g.title}
                </span>
              </div>
              <ul className="space-y-3">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-xl lg:text-2xl font-medium hover:text-primary transition-colors cursor-default flex items-center gap-3 group"
                  >
                    <span className="w-1 h-1 bg-muted-foreground group-hover:bg-primary group-hover:w-4 transition-all duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
