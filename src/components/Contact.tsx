import { ArrowUpRight, Mail } from "lucide-react";
import { contact, profile } from "@/data/portfolio";

// lucide-react no longer ships brand logos, so the LinkedIn mark is drawn inline.
function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className="lead-ic">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2>{contact.heading}</h2>
            <p className="lead">{contact.lead}</p>
          </div>
          <div className="links">
            <a className="link" href={`mailto:${profile.email}`}>
              <Mail size={22} className="lead-ic" aria-hidden />
              <div>
                Email me<small>{profile.email}</small>
              </div>
              <ArrowUpRight size={18} className="go" aria-hidden />
            </a>
            <a className="link" href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              <div>
                Connect on LinkedIn<small>{profile.linkedin.label}</small>
              </div>
              <ArrowUpRight size={18} className="go" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
