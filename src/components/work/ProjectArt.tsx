import type { Project } from "@/data/portfolio";
import { mockSvg } from "@/lib/mock";

/** Real screenshot when the project has one, otherwise the NDA-safe illustration. */
export default function ProjectArt({ project, inModal = false }: { project: Project; inModal?: boolean }) {
  if (project.img) {
    return (
      // Plain <img>: the site is a static export with unoptimized images, so next/image adds nothing here.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={inModal ? "shot" : undefined}
        src={project.img}
        alt={`${project.title} screenshot`}
        loading="lazy"
        style={inModal ? undefined : { objectPosition: project.pos ?? "center" }}
      />
    );
  }
  // The SVG string is built in lib/mock.ts from static values only, never from user input.
  return (
    <span
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{ __html: mockSvg(project.mock, project.color) }}
    />
  );
}
