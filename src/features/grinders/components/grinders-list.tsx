import Link from "next/link";
import { Card, Grid, Image, Text } from "@chakra-ui/react";
import { EmptyState } from "@/shared/components/empty-state";
import { PageSection } from "@/shared/components/page-section";
import { getStrapiImageUrl } from "@/shared/utils/strapi-media";
import { queryGrinders } from "../querys/query-grinders";
import { getGrinders } from "../services/get-grinders";

export async function GrindersList() {
  const { data } = await getGrinders(queryGrinders());

  if (data.length === 0) {
    return <EmptyState title="No grinders published" />;
  }

  return (
    <PageSection
      eyebrow="Tools"
      title="Grinders"
      description="Manual or electric, flat or conical — pick your grind path."
    >
      <Grid templateColumns="repeat(4, 1fr)" columnGap="6" rowGap="10">
        {data.map((grinder) => {
          const imageSrc = getStrapiImageUrl(grinder.cover, [
            "medium",
            "small",
            "thumbnail",
          ]);
          const meta = [grinder.burrType].filter(Boolean) as string[];

          return (
            <Card.Root key={grinder.documentId} asChild>
              <Link href={`/grinders/${grinder.slug}`}>
                {imageSrc ? (
                  <Card.Header>
                    <Image
                      src={imageSrc}
                      alt={
                        grinder.cover?.alternativeText?.trim() || grinder.name
                      }
                    />
                  </Card.Header>
                ) : null}
                <Card.Body>
                  {grinder.type ? (
                    <Text
                      textStyle="tag.2.mono"
                      color="neutral.500"
                      textTransform="uppercase"
                    >
                      {grinder.type}
                    </Text>
                  ) : null}
                  <Card.Title>{grinder.name}</Card.Title>
                  {meta.length > 0 ? (
                    <Card.Footer>
                      {meta.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </Card.Footer>
                  ) : null}
                </Card.Body>
              </Link>
            </Card.Root>
          );
        })}
      </Grid>
    </PageSection>
  );
}
