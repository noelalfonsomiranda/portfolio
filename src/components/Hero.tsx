import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

/** Split hero: introduction on the left, photo on the right. */
export default function Hero() {
  const { headline } = profile;
  return (
    <section id="home">
      <div className="wrap hero">
        <div>
          <p className="eyebrow">{profile.title}</p>
          <h1>
            {headline.before}
            <span className="accent">{headline.highlight}</span>
            {headline.after}
          </h1>
          <p className="sub">{profile.subtitle}</p>
          <div className="ctas">
            <a href="#work" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-link">
              Contact me <ArrowRight size={16} aria-hidden />
            </a>
          </div>
          <p className="status">
            <span className="dot" aria-hidden />
            {profile.status}
          </p>
        </div>
        <div className="hero-photo">
          <Image src={profile.photo.src} alt={profile.photo.alt} width={324} height={324} priority />
        </div>
      </div>
    </section>
  );
}
