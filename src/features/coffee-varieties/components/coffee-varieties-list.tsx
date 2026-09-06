import Link from "next/link";
import { Card, Grid, Text } from "@chakra-ui/react";
import { EmptyState } from "@/shared/components/empty-state";
import { PageSection } from "@/shared/components/page-section";
import { queryCoffeeVarieties } from "../querys/query-coffee-varieties";
import { getCoffeeVarieties } from "../services/get-coffee-varieties";

export async function CoffeeVarietiesList() {
  const { data } = await getCoffeeVarieties(queryCoffeeVarieties());

  if (data.length === 0) {
    return <EmptyState title="No coffee varieties published" />;
  }

  return (
    <PageSection
      eyebrow="Beans"
      title="Coffee varieties"
      description="Trace flavor back to origin, process, and roast."
    >
      <Grid templateColumns="repeat(4, 1fr)" columnGap="6" rowGap="10">
        {data.map((variety) => {
          const meta = [
            variety.origin?.name,
            variety.process_method?.name,
            variety.roast_level?.name,
          ].filter(Boolean) as string[];

          return (
            <Card.Root key={variety.documentId} asChild>
              <Link href={`/varieties/${variety.slug}`}>
                <Card.Body>
                  {variety.origin?.region ? (
                    <Text
                      textStyle="tag.2.mono"
                      color="neutral.500"
                      textTransform="uppercase"
                    >
                      {variety.origin.region}
                    </Text>
                  ) : null}
                  <Card.Title>{variety.name}</Card.Title>
                  {variety.flavorProfile ? (
                    <Card.Description>{variety.flavorProfile}</Card.Description>
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
