import Hero from "@/components/sections/home/Hero";
import HomeAbout from "@/components/sections/home/HomeAbout";
import HomeFeaturedProjects from "@/components/sections/home/HomeFeaturedProjects";
import HomeSkillsOverview from "@/components/sections/home/HomeSkillsOverview";
import HomeCallToAction from "@/components/sections/home/HomeCallToAction";

export default function Home() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800">
        <Hero />
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <HomeAbout />
      </div>
      <div className="bg-white dark:bg-gray-800">
        <HomeFeaturedProjects />
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <HomeSkillsOverview />
      </div>
      <div className="bg-white dark:bg-gray-800">
        <HomeCallToAction />
      </div>
    </div>
  );
}
