import { notFound } from "next/navigation";
import { DetailLayout } from "@/shared/components/detail-layout";
import { getBrewMethodBySlug } from "../services/get-brew-method-by-slug";

type BrewMethodDetailProps = {
  slug: string;
};

export async function BrewMethodDetail({ slug }: BrewMethodDetailProps) {
  const method = await getBrewMethodBySlug(slug);

  if (!method) notFound();

  return (
    <DetailLayout
      eyebrow="Brew method"
      title={method.name}
      lead={method.description}
      image={method.cover}
    />
  );
}
