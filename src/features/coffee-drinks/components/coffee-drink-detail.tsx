import { notFound } from "next/navigation";
import { DetailLayout } from "@/shared/components/detail-layout";
import { getCoffeeDrinkBySlug } from "../services/get-coffee-drink-by-slug";

type CoffeeDrinkDetailProps = {
  slug: string;
};

export async function CoffeeDrinkDetail({ slug }: CoffeeDrinkDetailProps) {
  const drink = await getCoffeeDrinkBySlug(slug);

  if (!drink) notFound();

  const meta = [
    drink.servingSize ? { label: "Serving", value: drink.servingSize } : null,
    drink.espressoShots
      ? { label: "Shots", value: drink.espressoShots }
      : null,
    drink.foamType ? { label: "Foam", value: drink.foamType } : null,
    drink.milk_ratio
      ? { label: "Milk ratio", value: drink.milk_ratio.name }
      : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <DetailLayout
      eyebrow="Coffee drink"
      title={drink.name}
      lead={drink.description}
      image={drink.cover}
      meta={meta}
    >
      {drink.instructions}
      {drink.milk_ratio?.description
        ? `\n\nMilk ratio — ${drink.milk_ratio.name}: ${drink.milk_ratio.description}`
        : null}
    </DetailLayout>
  );
}
