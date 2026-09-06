import { notFound } from "next/navigation";
import { DetailLayout } from "@/shared/components/detail-layout";
import { getOrigins } from "../services/get-origins";
import { queryOriginBySlug } from "../querys/query-origins";

type OriginDetailProps = {
  slug: string;
};

export async function OriginDetail({ slug }: OriginDetailProps) {
  const { data } = await getOrigins(queryOriginBySlug(slug));
  const origin = data[0];

  if (!origin) notFound();

  const meta = [
    origin.region ? { label: "Region", value: origin.region } : null,
    origin.altitudeRange
      ? { label: "Altitude", value: origin.altitudeRange }
      : null,
    origin.harvestSeason
      ? { label: "Harvest", value: origin.harvestSeason }
      : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <DetailLayout
      eyebrow="Origin"
      title={origin.name}
      lead={origin.description}
      meta={meta}
    />
  );
}
