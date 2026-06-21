import { openDb } from "@/lib/db";
import Hero from "@/components/home/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Institutional from "@/components/home/Institutional";

export default async function Home() {
  const db = await openDb();
  // Busca 3 imóveis em destaque (destaque = 1)
  const featuredProperties = await db.all(
    'SELECT * FROM Property WHERE destaque = 1 LIMIT 3'
  );

  return (
    <>
      <Hero />
      <QuickSearch />
      <FeaturedProperties properties={featuredProperties} />
      <Institutional />
    </>
  );
}
