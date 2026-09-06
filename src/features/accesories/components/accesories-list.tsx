import { EmptyState } from "@/shared/components/empty-state";
import { getStrapiImageUrl } from "@/shared/utils/strapi-media";
import {
  Card,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import { queryAccesories } from "../querys/query-accesories";
import { getAccesories } from "../services/get-accesories";

export async function AccesoriesList() {
  const { data } = await getAccesories(queryAccesories());

  if (data.length === 0) {
    return <EmptyState title="No accessories published" />;
  }

  return (
    <Container variant="default">
      <Grid templateColumns="repeat(4, 1fr)" columnGap="6" rowGap="10">
        {data.map((item) => {
          const imageSrc = getStrapiImageUrl(item.cover, [
            "medium",
            "small",
            "thumbnail",
          ]);

          return (
            <GridItem key={item.documentId}>
              <Card.Root variant="mediaCard">
                {imageSrc && (
                  <Card.Header>
                    <Image
                      transform="scale(1)"
                      transition="transform 0.3s ease"
                      _hover={{
                        transform: "scale(1.03)",
                      }}
                      src={imageSrc}
                      alt={item.cover?.alternativeText?.trim() || item.name}
                    />
                  </Card.Header>
                )}
                <Card.Body>
                  <Heading color="neutral.900">{item.name}</Heading>
                  <Card.Description>{item.description}</Card.Description>
                </Card.Body>
              </Card.Root>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}
