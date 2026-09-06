import { EmptyState } from "@/shared/components/empty-state";
import { PageSection } from "@/shared/components/page-section";
import { getStrapiImageUrl } from "@/shared/utils/strapi-media";
import { Card, Grid, Image } from "@chakra-ui/react";
import { queryBrewMethods } from "../querys/query-brew-methods";
import { getBrewMethods } from "../services/get-brew-methods";

export async function BrewMethodsList() {
  const { data } = await getBrewMethods(queryBrewMethods());

  if (data.length === 0) {
    return <EmptyState title="No brew methods published" />;
  }

  return (
    <PageSection
      eyebrow="Technique"
      title="Brew methods"
      description="Choose a method and dial in the extraction."
    >
      <Grid templateColumns="repeat(4, 1fr)" columnGap="6" rowGap="10">
        {data.map((method) => {
          const imageSrc = getStrapiImageUrl(method.cover, [
            "medium",
            "small",
            "thumbnail",
          ]);

          return (
            <Card.Root key={method.documentId} asChild>
              {imageSrc && (
                <Card.Header>
                  <Image
                    src={imageSrc}
                    alt={method.cover?.alternativeText?.trim() || method.name}
                  />
                </Card.Header>
              )}
              <Card.Body>
                <Card.Title>{method.name}</Card.Title>
                <Card.Description>{method.description}</Card.Description>
              </Card.Body>
            </Card.Root>
          );
        })}
      </Grid>
    </PageSection>
  );
}
