import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/features/home/services/get-coffee-drinks";

import { Hero } from "@/features/home/components/hero/hero";

import { CoffeeDrinkInterface } from "@/features/coffee-drinks/types/coffee-drink";
import { notFound } from "next/navigation";
import { queryCoffeeFeaturedDrink } from "../querys/query-coffee-featured-drink";
import { CoffeeFundamentals } from "./coffee-fundamentals/coffee-fundamentals";

const FEATURED_DRINK_SLUG = "cold-brew";

export async function HomePage() {
  "use cache";
  const [selectedDrink, drinks] = await Promise.all([
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

  const featuredDrink = selectedDrink?.data[0];
  const drinksList = drinks?.data || [];

  if (!featuredDrink || drinksList.length === 0) notFound();

  return (
    <>
      <Hero
        eyebrow="SPECIALTY COFFEE // GUIDE & CULTURE"
        title="The art, origin and ritual of specialty coffee."
        subtitle="From bean harvesting to your ultimate home brew."
        featuredDrink={featuredDrink as CoffeeDrinkInterface}
      />
      <CoffeeFundamentals
        eyebrow="THE BARISTA LAB // EXPLORE THE CRAFT"
        title="Deconstruct the cup. Refine your ritual."
        description="A deep dive into understanding coffee origins, fine-tuning critical brewing parameters, and mastering professional extraction techniques at home."
      />
    </>
  );
}
