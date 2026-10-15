import { Fragment } from "react";
import {
  Atom,
  ChevronRight,
  Cloud,
  FlaskConical,
  Palette,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { about, skills, type SkillGroup } from "@/data/portfolio";
import { ACCENT, TINT } from "@/lib/stack";

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  frontend: Atom,
  styling: Palette,
  backend: Server,
  testing: FlaskConical,
  cloud: Cloud,
  ai: Sparkles,
};

export default function About() {
  return (
    <section id="about" className="alt">
      <div className="wrap about">
        <div className="reveal">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="ai-flow">
            <div className="t">
              <Sparkles size={16} aria-hidden />
              {about.workflow.title}
            </div>
            <div className="steps">
              {about.workflow.steps.map((step, i) => (
                <Fragment key={step}>
                  <span>{step}</span>
                  {i < about.workflow.steps.length - 1 && <ChevronRight size={14} aria-hidden />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="skills reveal">
          {skills.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div className="skill" key={s.title}>
                <div className="ic" style={{ background: TINT[s.color], color: ACCENT[s.color] }}>
                  <Icon size={20} aria-hidden />
                </div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.items}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
