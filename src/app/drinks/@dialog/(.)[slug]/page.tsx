import { DrinkDetailDrawer } from "@/features/drinks/components/drawer/drink-detail-drawer";
import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/shared/services/get-coffee-drinks";

async function getDrink(slug: string) {
  "use cache";
  return getCoffeeDrinks(queryCoffeeDrinks({ slug }));
}

export default async function DrinkPageDetailDialog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const drink = await getDrink(slug);

  return <DrinkDetailDrawer drink={drink[0]} />;
}
