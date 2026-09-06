import { notFound } from "next/navigation";
import { DetailLayout } from "@/shared/components/detail-layout";
import { getCoffeeVarietyBySlug } from "../services/get-coffee-variety-by-slug";

type CoffeeVarietyDetailProps = {
  slug: string;
};

export async function CoffeeVarietyDetail({ slug }: CoffeeVarietyDetailProps) {
  const variety = await getCoffeeVarietyBySlug(slug);

  if (!variety) notFound();

  const meta = [
    variety.origin
      ? {
          label: "Origin",
          value: [variety.origin.name, variety.origin.region]
            .filter(Boolean)
            .join(" · "),
        }
      : null,
    variety.origin?.altitudeRange
      ? { label: "Altitude", value: variety.origin.altitudeRange }
      : null,
    variety.origin?.harvestSeason
      ? { label: "Harvest", value: variety.origin.harvestSeason }
      : null,
    variety.process_method
      ? { label: "Process", value: variety.process_method.name }
      : null,
    variety.roast_level
      ? { label: "Roast", value: variety.roast_level.name }
      : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <DetailLayout
      eyebrow="Coffee variety"
      title={variety.name}
      lead={variety.flavorProfile}
      meta={meta}
    >
      {[
        variety.origin?.description,
        variety.process_method?.description,
        variety.roast_level?.description,
      ]
        .filter(Boolean)
        .join("\n\n")}
    </DetailLayout>
  );
}
