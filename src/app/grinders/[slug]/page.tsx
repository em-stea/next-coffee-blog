import { GrinderDetail } from "@/features/grinders/components/grinder-detail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function GrinderDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <GrinderDetail slug={slug} />;
}
