import { notFound } from "next/navigation";
import { DetailLayout } from "@/shared/components/detail-layout";
import { getAccesoryBySlug } from "../services/get-accesory-by-slug";

type AccesoryDetailProps = {
  slug: string;
};

export async function AccesoryDetail({ slug }: AccesoryDetailProps) {
  const accesory = await getAccesoryBySlug(slug);

  if (!accesory) notFound();

  return (
    <DetailLayout
      eyebrow="Accessory"
      title={accesory.name}
      lead={accesory.description}
      image={accesory.cover}
    >
      {accesory.instructionsForUse}
    </DetailLayout>
  );
}
