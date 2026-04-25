import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { projects, resolveImage, type Project } from "@/data/projects";

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    document.title = "Projects — Rovic De Leon";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Selected projects by Rovic De Leon — full-stack web developer. Enterprise tooling, AI automations, landing pages, and freelance web apps built with React, Vue, Angular, Laravel, Salesforce & ServiceNow.";
    if (meta) meta.setAttribute("content", content);
  }, []);

  // Build filter list from all unique stack items + status
  const filters = useMemo(() => {
    const tech = new Set<string>();
    projects.forEach((p) => p.stack.forEach((s) => tech.add(s)));
    return ["All", ...Array.from(tech).sort()];
  }, []);

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.stack.includes(filter));
  }, [filter]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 noise overflow-hidden">
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
                [ Gallery ] — {projects.length} projects
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
              Click any tile for full details, screenshots, and tech stack.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="border-y border-border bg-card/50 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`mono text-xs uppercase tracking-wider px-3 py-1.5 border rounded-sm transition-colors whitespace-nowrap ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {visible.length === 0 ? (
            <p className="mono text-sm text-muted-foreground text-center py-20">
              No projects match this filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((p, i) => {
                const cover = p.images?.[0] ? resolveImage(p.images[0]) : undefined;
                return (
                  <motion.button
                    key={p.slug}
                    onClick={() => setActive(p)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                    className="group text-left bg-card border border-border hover:border-primary/50 rounded-sm overflow-hidden transition-all hover:-translate-y-1 duration-300"
                  >
                    {/* Cover */}
                    <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                      {cover ? (
                        <img
                          src={cover}
                          alt={`${p.title} screenshot`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <ImageIcon className="w-8 h-8" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent" />
                      <span className="absolute top-3 left-3 mono text-[10px] uppercase tracking-wider px-2 py-1 bg-background/80 backdrop-blur border border-border rounded-sm">
                        {p.year}
                      </span>
                      {p.images && p.images.length > 1 && (
                        <span className="absolute top-3 right-3 mono text-[10px] uppercase tracking-wider px-2 py-1 bg-background/80 backdrop-blur border border-border rounded-sm flex items-center gap-1">
                          <ImageIcon className="w-3 h-3" />
                          {p.images.length}
                        </span>
                      )}
                      <ArrowUpRight className="absolute bottom-3 right-3 w-5 h-5 text-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Body */}
                    <div className="p-4">
                      <h3 className="display-text text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                        {p.tagline}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {p.stack.slice(0, 4).map((s) => (
                          <span
                            key={s}
                            className="mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-secondary border border-border rounded-sm text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                        {p.stack.length > 4 && (
                          <span className="mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 text-muted-foreground">
                            +{p.stack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-20 mt-12">
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

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </main>
  );
};

export default Projects;
