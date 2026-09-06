import Link from "next/link";
import { Card, Grid, Text } from "@chakra-ui/react";
import { EmptyState } from "@/shared/components/empty-state";
import { PageSection } from "@/shared/components/page-section";
import { queryOrigins } from "../querys/query-origins";
import { getOrigins } from "../services/get-origins";

export async function OriginsList() {
  const { data } = await getOrigins(queryOrigins());

  if (data.length === 0) {
    return <EmptyState title="No origins published" />;
  }

  return (
    <PageSection
      eyebrow="Map"
      title="Origins"
      description="Regions, altitude, and harvest seasons that shape the cup."
    >
      <Grid templateColumns="repeat(4, 1fr)" columnGap="6" rowGap="10">
        {data.map((origin) => {
          const meta = [origin.altitudeRange, origin.harvestSeason].filter(
            Boolean,
          ) as string[];

          return (
            <Card.Root key={origin.documentId} asChild>
              <Link href={`/origins/${origin.slug}`}>
                <Card.Body>
                  {origin.region ? (
                    <Text
                      textStyle="tag.2.mono"
                      color="neutral.500"
                      textTransform="uppercase"
                    >
                      {origin.region}
                    </Text>
                  ) : null}
                  <Card.Title>{origin.name}</Card.Title>
                  {origin.description ? (
                    <Card.Description>{origin.description}</Card.Description>
                  ) : null}
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
