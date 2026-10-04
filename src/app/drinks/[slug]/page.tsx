import { DrinkDetailDrawer } from "@/features/drinks/components/drawer/drink-detail-drawer";
import { DrinkDrawerShell } from "@/features/drinks/components/drawer/drink-drawer-shell";
import { FilteredContent } from "@/features/drinks/components/filtered-content";
import { HeroDrink } from "@/features/drinks/components/hero-drink/hero-drink";
import { DrinksProvider } from "@/features/drinks/providers/drinks-providers";
import { queryDrinksCategories } from "@/features/drinks/querys/query-drinks-categories";
import { getCoffeeDrinkCategories } from "@/features/drinks/services/get-drinks-categories";
import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/shared/services/get-coffee-drinks";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const drinks = await getCoffeeDrinks(queryCoffeeDrinks());
  return drinks.map((drink) => ({
    slug: drink.slug,
  }));
}

export default async function DrinkPageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";

  const { slug } = await params;
  const drinks = await getCoffeeDrinks(queryCoffeeDrinks({ pageSize: 100 }));
  const categories = await getCoffeeDrinkCategories(queryDrinksCategories());
  const drink = await getCoffeeDrinks(queryCoffeeDrinks({ slug }));

  if (!drink?.[0]) notFound();

  return (
    <>
      <HeroDrink />
      <DrinksProvider drinks={drinks}>
        <FilteredContent categories={categories} />
      </DrinksProvider>

      <DrinkDrawerShell>
        <DrinkDetailDrawer drink={drink[0]} />
      </DrinkDrawerShell>
    </>
  );
}
