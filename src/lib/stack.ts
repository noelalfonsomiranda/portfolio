import type { Accent } from "@/data/portfolio";

export const ACCENT: Record<Accent, string> = {
  primary: "#087EA4",
  amber: "#E8A33D",
  coral: "#E07A5F",
  green: "#5E9E6E",
  purple: "#8B6FC9",
  slate: "#8A9399",
};
export const TINT: Record<Accent, string> = {
  primary: "#D6EEF5",
  amber: "#FBE6C2",
  coral: "#F7D6CC",
  green: "#D5EADA",
  purple: "#E3DBF5",
  slate: "#E4E7E9",
};

export type Layer = "fe" | "be" | "data" | "test" | "ops";

export const STACK: Record<Layer, { label: string; items: string[] }> = {
  fe: {
    label: "Front end",
    items: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Redux",
      "Lit",
      "Web Components",
      "Next.js",
      "Vite",
      "Nx",
      "styled-components",
      "Storybook",
      "Ant Design",
      "Bootstrap",
      "Material UI",
      "Semantic UI",
      "ES/UMD modules",
      "Twig",
      "jQuery",
      "BEM CSS",
      "HTML",
      "CSS",
    ],
  },
  be: {
    label: "Back end",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Java",
      "ASP.NET",
      "REST APIs",
      "Stripe",
      "PHP",
      "JSP",
      "WordPress",
      "WooCommerce",
    ],
  },
  data: { label: "Database", items: ["PostgreSQL", "MySQL", "Firebase", "MongoDB"] },
  test: { label: "Testing", items: ["Jest", "Vitest", "React Testing Library", "Cypress"] },
  ops: {
    label: "Cloud and DevOps",
    items: ["AWS", "Heroku", "Netlify", "Docker", "CI/CD", "npm/CDN", "FTP hosting"],
  },
};

export const LAYERS = Object.keys(STACK) as Layer[];

export const layerOf = (tag: string): Layer => LAYERS.find((k) => STACK[k].items.includes(tag)) ?? "fe";

/** Pick a spread across layers so cards show the full stack, not only the front end. */
export function pickTags(tags: string[], max: number): { shown: string[]; rest: number } {
  const groups = LAYERS.map((k) => tags.filter((t) => layerOf(t) === k));
  const shown: string[] = [];
  for (let r = 0; shown.length < max && groups.some((g) => g[r]); r++)
    groups.forEach((g) => {
      if (g[r] && shown.length < max) shown.push(g[r]);
    });
  shown.sort((a, b) => LAYERS.indexOf(layerOf(a)) - LAYERS.indexOf(layerOf(b)));
  return { shown, rest: tags.length - shown.length };
}
