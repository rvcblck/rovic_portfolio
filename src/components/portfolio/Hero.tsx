import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-24 pb-16 overflow-hidden noise">
      {/* Glow background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-16 mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Portfolio / 2026
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Pulilan, Bulacan — PH
          </div>
        </motion.div>

        {/* Main display */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="display-text text-[14vw] lg:text-[10rem] leading-[0.85]"
            >
              ROVIC<br />
              <span className="text-gradient">DE&nbsp;LEON</span>
              <span className="text-primary">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="col-span-12 lg:col-span-3 lg:pb-6"
          >
            <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              [ Role ]
            </p>
            <p className="text-xl lg:text-2xl font-medium">
              Full-stack <br />
              web developer<span className="cursor-blink" />
            </p>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 lg:col-span-5">
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              Results-driven developer with{" "}
              <span className="text-foreground font-medium">2+ years</span>{" "}
              shipping production-grade apps across Angular, React, Vue, and Laravel.
              Currently engineering enterprise tooling and AI automations at{" "}
              <span className="text-primary">Radius Telecoms</span>.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
            <a
              href="#work"
              className="group flex items-center justify-between border border-border hover:border-primary p-5 transition-all duration-500 rounded-sm bg-card hover:bg-secondary"
            >
              <span className="mono text-sm uppercase tracking-wider">
                View selected work
              </span>
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] group-hover:text-primary transition-all duration-500" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-between border border-border hover:border-primary p-5 transition-all duration-500 rounded-sm bg-card hover:bg-secondary"
            >
              <span className="mono text-sm uppercase tracking-wider">
                Start a project
              </span>
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] group-hover:text-primary transition-all duration-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
