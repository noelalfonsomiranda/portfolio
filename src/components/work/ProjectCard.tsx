import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import ProjectArt from "./ProjectArt";
import { TagSpread } from "./Tags";
import { cx } from "@/lib/cx";

type Props = { project: Project; compact?: boolean; onOpen: () => void };

export default function ProjectCard({ project, compact = false, onOpen }: Props) {
  return (
    <button
      type="button"
      className={cx("project sketch reveal", compact && "mini")}
      aria-haspopup="dialog"
      onClick={onOpen}
    >
      <span className="thumb">
        <ProjectArt project={project} />
        {project.current && <span className="badge-current">Current role</span>}
      </span>
      <span className="body">
        <span className="kind">{project.kind}</span>
        <span className="title">
          {project.title}
          <ArrowUpRight size={compact ? 15 : 18} aria-hidden />
        </span>
        {!compact && <span className="short">{project.short}</span>}
        <TagSpread tags={project.tags} max={compact ? 4 : 8} />
      </span>
    </button>
  );
}
