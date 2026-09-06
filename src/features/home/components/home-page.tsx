import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/features/home/services/get-coffee-drinks";
import { EmptyState } from "@/shared/components/empty-state";
import { Hero } from "@/features/home/components/hero";
import { HomeDrinks } from "./home-drinks";
import { queryCoffeeFeaturedDrink } from "../querys/query-coffee-featured-drink";

const FEATURED_DRINK_SLUG = "cold-brew";

export async function HomePage() {
  const [{ data: selectedDrink }, { data: drinks }] = await Promise.all([
    getCoffeeDrinks(
      queryCoffeeFeaturedDrink({
        filters: {
          slug: FEATURED_DRINK_SLUG,
        },
      }),
    ),
    getCoffeeDrinks(
      queryCoffeeDrinks({
        pageSize: 4,
        sort: ["createdAt:desc"],
      }),
    ),
  ]);

  const featuredDrink = selectedDrink[0];

  if (drinks.length === 0 || !featuredDrink) {
    return <EmptyState title="No content yet" />;
  }

  return (
    <>
      <Hero
        eyebrow="SPECIALTY COFFEE // GUIDE & CULTURE"
        title="The art, origin and ritual of specialty coffee."
        subtitle="From bean harvesting to your ultimate home brew."
        featuredDrink={featuredDrink}
      />

      {/* <HomeDrinks drinks={drinks} /> */}
    </>
  );
}
