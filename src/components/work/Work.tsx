"use client";

import { useCallback, useState } from "react";
import { FEATURED, projects, type Project } from "@/data/portfolio";
import { LAYERS, STACK } from "@/lib/stack";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const featured = FEATURED.map((title) => projects.find((p) => p.title === title)).filter(
  (p): p is Project => !!p,
);
const more = projects.filter((p) => !FEATURED.includes(p.title));

export default function Work() {
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <p className="eyebrow">things I&apos;ve built</p>
            <h2>Selected work</h2>
            <p className="lead">
              Real products for real users, from payments and banking to NGOs and hotels. Click any card for
              the story.
            </p>
            <div className="legend" aria-label="Tag colors">
              {LAYERS.map((l) => (
                <span key={l} className={`tag t-${l}`}>
                  {STACK[l].label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="projects">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={() => setOpen(p)} />
          ))}
        </div>

        {more.length > 0 && (
          <>
            <p className="more-head reveal">
              <span className="hand">and a few more</span>
            </p>
            <div className="projects-more">
              {more.map((p) => (
                <ProjectCard key={p.title} project={p} compact onOpen={() => setOpen(p)} />
              ))}
            </div>
          </>
        )}
      </div>

      <ProjectModal project={open} onClose={close} />
    </section>
  );
}
