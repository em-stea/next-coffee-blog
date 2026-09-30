import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/shared/services/get-coffee-drinks";
import { notFound } from "next/navigation";

export default async function DrinksPage() {
  const allDrinks = await getCoffeeDrinks(queryCoffeeDrinks({ pageSize: 100 }));

  const drinks = allDrinks?.data || [];

  if (drinks.length === 0) notFound();

  console.log(drinks);

  return <div>DrinksPage</div>;
}
