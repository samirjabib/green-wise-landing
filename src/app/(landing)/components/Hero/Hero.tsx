import { HeroBackground } from "./HeroBackground";
import { HeroCard } from "./HeroCard";
import { HeroTextBox } from "./HeroTextBox";

export const Hero = () => {
  return (
    <div className="" id="hero">
      <HeroBackground />
      <HeroTextBox />
      <HeroCard />
    </div>
  );
};
