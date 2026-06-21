import { dbAll } from "@/lib/db";
import Hero from "@/components/home/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Institutional from "@/components/home/Institutional";

export default async function Home() {
  const featuredProperties = await dbAll(
    'SELECT * FROM Property WHERE destaque = 1 LIMIT 3'
  );

  return (
    <>
      <Hero />
      <QuickSearch />
      <FeaturedProperties properties={featuredProperties as any[]} />
      <Institutional />
    </>
  );
}
