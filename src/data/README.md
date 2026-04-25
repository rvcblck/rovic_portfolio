# How to add a new project

All projects on the **/projects** page are loaded from
[`src/data/projects.json`](./projects.json). To add or update a project,
just edit that JSON file — no React code required.

## 1. Add screenshots

Drop your image files into:

```
src/assets/projects/
```

Recommended size: **1280×800** (or any 16:10 ratio). JPG or PNG both work.
Name them however you like — just remember the filename.

## 2. Add an entry to `projects.json`

Append a new object to the array:

```json
{
  "slug": "my-new-project",
  "title": "My New Project",
  "tagline": "One-line summary that appears under the title.",
  "description": "A longer paragraph describing what this project is and what you built.",
  "role": "Full-Stack Developer",
  "year": "2026",
  "client": "Acme Inc.",
  "status": "Live",
  "stack": ["React", "TypeScript", "Tailwind", "Supabase"],
  "highlights": [
    "Bullet point describing a key accomplishment",
    "Another notable feature or outcome",
    "A measurable result — performance, users, etc."
  ],
  "images": ["my-screenshot-1.jpg", "my-screenshot-2.jpg"],
  "links": [
    { "label": "Live site", "href": "https://example.com" },
    { "label": "GitHub", "href": "https://github.com/you/repo" }
  ]
}
```

## Field reference

| Field | Required | Notes |
|---|---|---|
| `slug` | ✅ | Unique kebab-case ID |
| `title` | ✅ | Project name |
| `tagline` | ✅ | One-line subtitle |
| `description` | ✅ | Full paragraph |
| `role` | ✅ | Your role on the project |
| `year` | ✅ | e.g. `"2025"` or `"2024 — 2025"` |
| `client` | ⬜ | Optional client/company name |
| `status` | ✅ | `"Live"`, `"In Development"`, `"Internal"`, or `"Archived"` |
| `stack` | ✅ | Array of tech strings — shown as chips |
| `highlights` | ✅ | Array of bullet points |
| `images` | ⬜ | Array of filenames in `src/assets/projects/` |
| `links` | ⬜ | Array of `{ label, href }` external links |

That's it — refresh the page and your project will appear.
