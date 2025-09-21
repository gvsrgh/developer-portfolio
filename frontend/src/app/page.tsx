import Hero from "@/components/sections/home/Hero";
import HomeAbout from "@/components/sections/home/HomeAbout";
import HomeFeaturedProjects from "@/components/sections/home/HomeFeaturedProjects";
import HomeSkillsOverview from "@/components/sections/home/HomeSkillsOverview";
import HomeCallToAction from "@/components/sections/home/HomeCallToAction";

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
