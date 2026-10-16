import { footer, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{footer.note}</span>
      </div>
    </footer>
  );
}
