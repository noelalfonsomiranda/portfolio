"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Cloud,
  Database,
  FlaskConical,
  LayoutTemplate,
  Server,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/data/portfolio";
import { LAYERS, STACK, layerOf, type Layer } from "@/lib/stack";
import ProjectArt from "./ProjectArt";
import { Tag } from "./Tags";
import { cx } from "@/lib/cx";

const LAYER_ICONS: Record<Layer, LucideIcon> = {
  fe: LayoutTemplate,
  be: Server,
  data: Database,
  test: FlaskConical,
  ops: Cloud,
};

type Props = { project: Project | null; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const returnFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;
      // Keep keyboard focus inside the dialog while it is open.
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        "button, a[href], [tabindex]:not([tabindex='-1'])",
      );
      const first = focusables[0],
        last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      returnFocus?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="overlay"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={dialogRef}
            className={cx("modal", project.img && "has-shot")}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            initial={reduce ? false : { y: 16, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={reduce ? undefined : { y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="m-art">
              <ProjectArt project={project} inModal />
            </div>
            <div className="m-body">
              <button ref={closeRef} type="button" className="close" aria-label="Close" onClick={onClose}>
                <X size={18} />
              </button>
              <span className="tag">{project.kind}</span>
              <h3 id="project-title">{project.title}</h3>
              <div className="my-role">
                <UserRound size={14} aria-hidden />
                My role: {project.role}
              </div>
              <p>{project.desc}</p>
              <ul>
                {project.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="m-stack">
                {LAYERS.map((layer) => {
                  const tags = project.tags.filter((t) => layerOf(t) === layer);
                  if (!tags.length) return null;
                  const Icon = LAYER_ICONS[layer];
                  return (
                    <div className="m-row" key={layer}>
                      <span className="m-lbl">
                        <Icon size={15} aria-hidden />
                        {STACK[layer].label}
                      </span>
                      <span className="tags">
                        {tags.map((t) => (
                          <Tag key={t} name={t} />
                        ))}
                      </span>
                    </div>
                  );
                })}
              </div>
              {!project.img && <p className="nda">* illustration only, client work is under NDA</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
