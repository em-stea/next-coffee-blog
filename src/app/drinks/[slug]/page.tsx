import { CoffeeDrinkDetail } from "@/features/coffee-drinks/components/coffee-drink-detail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DrinkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <CoffeeDrinkDetail slug={slug} />;
}
