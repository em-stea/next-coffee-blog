import { CoffeeVarietyDetail } from "@/features/coffee-varieties/components/coffee-variety-detail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function VarietyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <CoffeeVarietyDetail slug={slug} />;
}
