import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const homeHash = (hash: string) => `${import.meta.env.BASE_URL}${hash}`;

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm rounded-sm group-hover:rotate-90 transition-transform duration-500">
            R
          </div>
          <span className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            de_leon.dev
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={homeHash(l.href.slice(1))}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors mono uppercase tracking-wider"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors mono uppercase tracking-wider"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <a
          href={homeHash("#contact")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold mono uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
          Available
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="mx-auto max-w-[1400px] px-6 py-4">
              <div className="grid gap-2">
                {links.map((l) =>
                  l.href.startsWith("/#") ? (
                    <a
                      key={l.href}
                      href={homeHash(l.href.slice(1))}
                      onClick={() => setIsOpen(false)}
                      className="mono flex items-center justify-between rounded-sm border border-border bg-card px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                    </a>
                  ) : (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={() => setIsOpen(false)}
                      className="mono flex items-center justify-between rounded-sm border border-border bg-card px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                    </Link>
                  )
                )}
                <a
                  href={homeHash("#contact")}
                  onClick={() => setIsOpen(false)}
                  className="mono mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
                  Available for work
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
