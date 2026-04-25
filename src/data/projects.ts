import projectsData from "./projects.json";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  client?: string;
  status: "Live" | "In Development" | "Archived" | "Internal";
  stack: string[];
  highlights: string[];
  images?: string[];
  links?: { label: string; href: string }[];
};

// Auto-import every image inside src/assets/projects/ so the JSON file
// only needs to reference the filename — no hand-written imports required.
const imageModules = import.meta.glob("@/assets/projects/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const imageMap: Record<string, string> = {};
for (const [path, url] of Object.entries(imageModules)) {
  const filename = path.split("/").pop()!;
  imageMap[filename] = url;
}

export const resolveImage = (filename: string): string | undefined =>
  imageMap[filename];

export const projects = projectsData as Project[];
