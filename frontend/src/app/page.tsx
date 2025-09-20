import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeFeaturedProjects from "@/components/sections/HomeFeaturedProjects";
import HomeSkillsOverview from "@/components/sections/HomeSkillsOverview";
import HomeCallToAction from "@/components/sections/HomeCallToAction";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeFeaturedProjects />
      <HomeSkillsOverview />
      <HomeCallToAction />
    </div>
  );
}
