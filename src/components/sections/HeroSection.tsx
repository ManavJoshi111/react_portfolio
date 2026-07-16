import { FileTextIcon } from "lucide-react";
import { Button } from "../ui/button";
import { resume } from "@/data";

// h-auto reclaims the height from the size variant's h-9, which would otherwise
// clamp the padding; has-[>svg]:px-5 overrides the variant's has-[>svg]:px-3,
// which wins on specificity once an icon sits inside the anchor.
// Hover stays deliberately quiet: the border firms up to full primary and a
// small shadow lifts the pill. The border carries the cue in dark mode, where
// a shadow barely reads.
const ctaClasses =
  "mt-8 h-auto gap-2 rounded-full border border-primary/40 px-5 py-2.5 has-[>svg]:px-5 text-base font-medium text-primary duration-200 hover:border-primary hover:shadow-md";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section flex flex-col justify-center items-start px-4 sm:px-10 md:px-20"
    >
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">Manav</h1>
      <span className="block text-lg sm:text-xl md:text-2xl pt-3">
        I'm a Software Engineer 🧑‍💻, and I love understanding how things work, be
        it physics, philosophy or literally anything.
      </span>

      <Button asChild variant="ghost" className={ctaClasses}>
        <a
          href={resume.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View resume (opens in a new tab)"
        >
          <FileTextIcon />
          View Resume
        </a>
      </Button>
    </section>
  );
};

export default HeroSection;
