import { jobs, journey } from "@/data/portfolio";
import { ACCENT } from "@/lib/stack";

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">{journey.eyebrow}</p>
            <h2>{journey.heading}</h2>
            <p className="lead">{journey.lead}</p>
          </div>
        </div>

        <ol className="timeline">
          <li className="tl-note" aria-hidden>
            {journey.note[0]}
            <br />
            {journey.note[1]}
          </li>
          {jobs.map((job, i) => {
            const side = i % 2 ? "right" : "left";
            const [before, highlight, after] = job.text;
            return (
              <li
                key={`${job.company}-${job.when}`}
                className={`tl-item ${side}`}
                style={{ gridColumn: side === "left" ? 1 : 3, gridRow: `${i + 1} / span 2` }}
              >
                <span className="tl-conn" aria-hidden />
                <span className="tl-dot" style={{ borderColor: ACCENT[job.color] }} aria-hidden />
                <div className="card">
                  <div className="hd" style={{ background: ACCENT[job.color] }}>
                    <h3>{job.title}</h3>
                    <small>{job.when}</small>
                  </div>
                  <div className="bd">
                    <div className="co">{job.company}</div>
                    {before}
                    {highlight && <b>{highlight}</b>}
                    {after}
                    <div className="tags">
                      {job.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
