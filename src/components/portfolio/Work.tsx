import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const selectedProjects = projects.slice(0, 4);

export const Work = () => {
  return (
    <section id="work" className="relative py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              [ 01 ] - Selected Work
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
          {selectedProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link
                to="/projects"
                className="group block border-b border-border py-8 lg:py-10 hover:bg-card/50 transition-colors duration-500 -mx-6 lg:-mx-10 px-6 lg:px-10"
              >
                <div className="grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 lg:col-span-1 mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 lg:col-span-5">
                    <h3 className="display-text text-3xl lg:text-5xl group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 mono text-xs uppercase tracking-wider text-muted-foreground">
                      {p.client} - {p.year}
                    </p>
                  </div>
                  <p className="hidden lg:block col-span-4 text-sm text-muted-foreground leading-relaxed">
                    {p.tagline}
                  </p>
                  <div className="hidden lg:flex col-span-2 justify-end items-center gap-3">
                    <div className="flex flex-wrap gap-1 justify-end">
                      {p.stack.slice(0, 2).map((t) => (
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
