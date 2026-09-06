import { notFound } from "next/navigation";
import { DetailLayout } from "@/shared/components/detail-layout";
import { getGrinderBySlug } from "../services/get-grinder-by-slug";

type GrinderDetailProps = {
  slug: string;
};

export async function GrinderDetail({ slug }: GrinderDetailProps) {
  const grinder = await getGrinderBySlug(slug);

  if (!grinder) notFound();

  const meta = [
    grinder.type ? { label: "Type", value: grinder.type } : null,
    grinder.burrType ? { label: "Burrs", value: grinder.burrType } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <DetailLayout
      eyebrow="Grinder"
      title={grinder.name}
      lead={grinder.description}
      image={grinder.cover}
      meta={meta}
    />
  );
}
