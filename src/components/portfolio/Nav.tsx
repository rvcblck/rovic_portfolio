import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm rounded-sm group-hover:rotate-90 transition-transform duration-500">
            R
          </div>
          <span className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            de_leon.dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors mono uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold mono uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
          Available
        </a>
      </div>
    </motion.header>
  );
};
