import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "rovicdeleon.dev@gmail.com",
    href: "mailto:rovicdeleon.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0951 159 1786",
    href: "tel:+639511591786",
  },
  {
    icon: Github,
    label: "Portfolio",
    value: "rvcblck.github.io",
    href: "https://rvcblck.github.io/rovic_portfolio/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-40 bg-card border-t border-border noise overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.18),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
            [ 04 ] — Let's Build
          </p>
          <h2 className="display-text text-6xl md:text-[10rem] leading-[0.85]">
            Got an idea<span className="text-primary">?</span><br />
            <span className="text-gradient">Let's ship it.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto rounded-sm overflow-hidden">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-background p-8 hover:bg-secondary transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <c.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="mono text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-base font-medium mt-0.5">{c.value}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        <div className="mt-16 flex justify-center mono text-xs uppercase tracking-wider text-muted-foreground gap-2">
          <MapPin className="w-3.5 h-3.5" />
          Pulilan, Bulacan — Philippines / Available worldwide
        </div>
      </div>
    </section>
  );
};
