import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";

const statusColor: Record<string, string> = {
  Live: "text-primary",
  Internal: "text-muted-foreground",
  "In Development": "text-foreground",
  Archived: "text-muted-foreground",
};

const Projects = () => {
  useEffect(() => {
    document.title = "Projects — Rovic De Leon";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Selected projects by Rovic De Leon — full-stack web developer. Enterprise tooling, AI automations, landing pages, and freelance web apps built with React, Vue, Angular, Laravel, Salesforce & ServiceNow.";
    if (meta) meta.setAttribute("content", content);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 noise overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.15),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>

          <div className="grid grid-cols-12 gap-6 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-12 lg:col-span-9"
            >
              <p className="mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
                [ Index ] — {projects.length} projects
              </p>
              <h1 className="display-text text-6xl md:text-[10rem] leading-[0.85]">
                Projects<span className="text-primary">.</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-12 lg:col-span-3 text-base text-muted-foreground leading-relaxed lg:pb-6"
            >
              A growing collection of work — from enterprise platforms to scrappy
              freelance builds. Each entry lists role, stack, and what shipped.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section className="pb-24 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="surface rounded-sm overflow-hidden group hover:border-primary/40 border border-border transition-colors"
            >
              <div className="grid grid-cols-12 gap-0">
                {/* Left meta column */}
                <div className="col-span-12 lg:col-span-3 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border bg-card/50">
                  <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mono text-sm mt-6 mb-1 text-muted-foreground">Year</p>
                  <p className="display-text text-2xl">{p.year}</p>

                  <p className="mono text-sm mt-6 mb-1 text-muted-foreground">Role</p>
                  <p className="text-base">{p.role}</p>

                  {p.client && (
                    <>
                      <p className="mono text-sm mt-6 mb-1 text-muted-foreground">Client</p>
                      <p className="text-base">{p.client}</p>
                    </>
                  )}

                  <p className="mono text-sm mt-6 mb-1 text-muted-foreground">Status</p>
                  <p className={`mono text-sm uppercase tracking-wider flex items-center gap-2 ${statusColor[p.status]}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {p.status}
                  </p>
                </div>

                {/* Right content column */}
                <div className="col-span-12 lg:col-span-9 p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div>
                      <h2 className="display-text text-3xl lg:text-5xl group-hover:text-primary transition-colors">
                        {p.title}
                      </h2>
                      <p className="mt-3 text-lg text-muted-foreground">{p.tagline}</p>
                    </div>
                    {p.links?.[0] && (
                      <a
                        href={p.links[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 mono text-xs uppercase tracking-wider px-4 py-2 border border-border hover:border-primary hover:text-primary rounded-sm transition-colors"
                      >
                        {p.links[0].label}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="text-base leading-relaxed mt-6 max-w-3xl">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-2">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mono shrink-0">→</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="mono text-xs uppercase tracking-wider px-3 py-1.5 bg-secondary border border-border hover:border-primary hover:text-primary transition-colors rounded-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="display-text text-3xl md:text-5xl">
              Want to be next on the list<span className="text-primary">?</span>
            </h3>
            <p className="mono text-xs uppercase tracking-wider text-muted-foreground mt-3">
              Always open to interesting builds.
            </p>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-sm"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
