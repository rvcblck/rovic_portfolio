export const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 mono text-xs uppercase tracking-wider text-muted-foreground">
        <p>© 2026 Rovic De Leon — Built with care.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Status: Open to opportunities
        </p>
      </div>
    </footer>
  );
};
