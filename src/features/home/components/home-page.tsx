import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/features/home/services/get-coffee-drinks";

import { Hero } from "@/features/home/components/hero/hero";

import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { notFound } from "next/navigation";
import { queryCoffeeFeaturedDrink } from "../querys/query-coffee-featured-drink";
import { CoffeeFundamentals } from "./coffee-fundamentals/coffee-fundamentals";
import { EssentialDuo } from "./essential-duo/essential-duo";
import { getBrewMethods } from "../services/get-brew-methods";
import { queryBrewMethods } from "../querys/query-brew-methods";
import { StickySection } from "./sticky-section/sticky-section";

const FEATURED_DRINK_SLUG = "cold-brew";

export async function HomePage() {
  "use cache";

  const [selectedDrink, drinks, brewMethods] = await Promise.all([
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
        sort: ["sortOrder:asc"],
      }),
    ),
    getBrewMethods(queryBrewMethods({ pageSize: 2, sort: ["sortOrder:asc"] })),
  ]);

  const featuredDrink = selectedDrink?.data[0];
  const drinksList = drinks?.data || [];
  const brewMethodsList = brewMethods?.data || [];

  if (!featuredDrink || drinksList.length === 0 || brewMethodsList.length === 0)
    notFound();

  return (
    <>
      <Hero
        eyebrow={"SPECIALTY COFFEE \u00A0\ //  \u00A0\ GUIDE & CULTURE"}
        title="The art, origin and ritual of specialty coffee."
        subtitle="From bean harvesting to your ultimate home brew."
        featuredDrink={featuredDrink as CoffeeDrinkInterface}
      />
      <CoffeeFundamentals
        eyebrow={"YIELD & ORIGIN \u00A0\ // \u00A0\EXPLORE THE CRAFT"}
        title="Deconstruct the cup. Refine your ritual."
        description="A deep dive into understanding coffee origins, fine-tuning critical brewing parameters, and mastering professional extraction techniques at home."
      />
      <EssentialDuo
        eyebrow="EXPERIMENTAL STANDARDS"
        title="Essential Extraction Duo"
        description="Comparative analysis of the two primary dynamics: atmospheric gravity percolation versus high-pressure hydrostatic injection."
        brewMethods={brewMethodsList}
      />
      <StickySection />
    </>
  );
}
