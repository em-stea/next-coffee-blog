import { ComparisonGuide } from "@/features/drinks/components/comparison-guide/comparison-guide";
import { FilteredContent } from "@/features/drinks/components/filtered-content";
import { HeroDrink } from "@/features/drinks/components/hero-drink/hero-drink";
import { DrinksProvider } from "@/features/drinks/providers/drinks-providers";
import { queryDrinksCategories } from "@/features/drinks/querys/query-drinks-categories";
import { getCoffeeDrinkCategories } from "@/features/drinks/services/get-drinks-categories";
import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/shared/services/get-coffee-drinks";
import { notFound } from "next/navigation";

export default async function DrinksPage() {
  "use cache";

  const drinks = await getCoffeeDrinks(queryCoffeeDrinks({ pageSize: 100 }));
  const categories = await getCoffeeDrinkCategories(queryDrinksCategories());

  if (drinks.length === 0) notFound();

  console.log(drinks, "drinks");
  return (
    <>
      <HeroDrink />

      <DrinksProvider drinks={drinks}>
        <FilteredContent categories={categories} />
      </DrinksProvider>

      <ComparisonGuide drinks={drinks} />
    </>
  );
}
