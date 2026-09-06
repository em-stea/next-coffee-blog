import { OriginDetail } from "@/features/origins/components/origin-detail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OriginDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <OriginDetail slug={slug} />;
}
