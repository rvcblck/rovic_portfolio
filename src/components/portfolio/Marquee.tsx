const items = [
  "Full-Stack Engineer",
  "AI Automations",
  "Salesforce",
  "ServiceNow",
  "React / Next.js",
  "Vue / Nuxt",
  "Angular",
  "Laravel",
  "Available for hire",
];

export const Marquee = () => {
  return (
    <div className="relative border-y border-border bg-card overflow-hidden py-6">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="display-text text-3xl md:text-5xl uppercase mx-8 inline-flex items-center">
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
};
