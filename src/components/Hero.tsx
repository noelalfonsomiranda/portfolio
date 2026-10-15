import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const { headline } = profile;
  return (
    <section id="home">
      <div className="wrap">
        <div className="hero">
          <div>
            <p className="eyebrow">{profile.greeting}</p>
            <h1>
              {headline.before}
              <span className="squiggle">{headline.highlight}</span>
              {headline.after}
            </h1>
            <p className="sub">{profile.subtitle}</p>
            <div className="ctas">
              <a href="#work" className="btn btn-primary">
                See my work <ArrowRight size={16} aria-hidden />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Say hello
              </a>
            </div>
            <p className="status">
              <span className="pulse" aria-hidden />
              {profile.status}
            </p>
          </div>

          <div className="art">
            <div className="photo-wrap">
              <span className="spark s1" aria-hidden />
              <span className="spark s2" aria-hidden />
              <span className="spark s3" aria-hidden>
                +
              </span>
              <div className="photo-blob">
                <Image src={profile.photo.src} alt={profile.photo.alt} width={324} height={324} priority />
              </div>
              <span className="sticker" aria-hidden>
                ☕︎
              </span>
            </div>
            <p className="note" style={{ top: "4%", right: "-2%" }} aria-hidden>
              better code,
              <br />
              better days ✦
            </p>
            <p
              className="note"
              style={{ bottom: "8%", left: 0, transform: "rotate(5deg)", color: "var(--primary)" }}
              aria-hidden
            >
              powered by
              <br />
              coffee ↗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
