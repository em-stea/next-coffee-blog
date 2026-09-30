import { Filters } from "@/features/drinks/components/filters";
import { queryDrinksCategories } from "@/features/drinks/querys/query-drinks-categories";
import { getCoffeeDrinkCategories } from "@/features/drinks/services/get-drinks-categories";
import { queryCoffeeDrinks } from "@/features/home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "@/shared/services/get-coffee-drinks";
import { Container } from "@chakra-ui/react";
import { notFound } from "next/navigation";

export default async function DrinksPage() {
  const drinks = await getCoffeeDrinks(queryCoffeeDrinks({ pageSize: 100 }));
  const categories = await getCoffeeDrinkCategories(queryDrinksCategories());

  if (drinks.length === 0) notFound();

  return (
    <Container>
      <Filters drinks={drinks} categories={categories} />
    </Container>
  );
}
