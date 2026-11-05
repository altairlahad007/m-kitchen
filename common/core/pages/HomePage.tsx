import {
  Hero,
  HomeInfo,
  AboutUs,
  NutritionFacts,
  Packages,
  DeliveryInfo,
  ReachUs,
} from "@core/components";

export function HomePage() {
  return (
    <main className="flex-1">
      <Hero>
        <HomeInfo />
      </Hero>
      <AboutUs />
      <NutritionFacts />
      <Packages />
      <DeliveryInfo />
      <ReachUs />
    </main>
  );
}
