import CategoriesSection from "@/components/CategorySection/CategorySection";
import Hero from "../components/Hero/Hero";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import FeaturedCollection from "@/components/FeaturedCollection/FeaturedCollection";
import AboutSection from "@/components/AboutSection/AboutSection";
import Newsletter from "@/components/Newsletter/Newsletter";
export default function Home() {
  return (
    <main>
      <Hero/>
      <CategoriesSection/>
      <NewArrivals/>
      <FeaturedCollection/>
      <AboutSection/>
      <Newsletter/>
    </main>
  )
}