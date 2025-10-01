import { Link } from "react-router-dom";

interface SiteLogoProps {
  className?: string;
}

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <Link to="/" className={`flex flex-col items-start hover:opacity-90 transition-opacity ${className}`}>
      <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#6654f5] via-[#b84d8f] to-[#f2b347] bg-clip-text text-transparent leading-tight">
        App Idea Engine
      </span>
      <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500">
        By Enterprise DNA
      </span>
    </Link>
  );
}
