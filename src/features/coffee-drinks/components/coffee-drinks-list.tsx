import { EmptyState } from "@/shared/components/empty-state";
import { getStrapiImageUrl } from "@/shared/utils/strapi-media";
import { Card, Grid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { queryCoffeeDrinks } from "../../home/querys/query-coffee-drinks";
import { getCoffeeDrinks } from "../../home/services/get-coffee-drinks";

export async function CoffeeDrinksList() {
  const { data } = await getCoffeeDrinks(queryCoffeeDrinks());

  if (data.length === 0) {
    return <EmptyState title="No coffee drinks published" />;
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)" columnGap="6" rowGap="10">
      {data.map((drink) => {
        const imageSrc = getStrapiImageUrl(drink.cover, [
          "medium",
          "small",
          "thumbnail",
        ]);
        const meta = [
          drink.foamType,
          drink.espressoShots,
          drink.milk_ratio?.name,
        ].filter(Boolean) as string[];

        return (
          <Card.Root key={drink.documentId} asChild>
            <Link href={`/drinks/${drink.slug}`}>
              {imageSrc ? (
                <Card.Header>
                  <Image
                    src={imageSrc}
                    alt={drink.cover?.alternativeText?.trim() || drink.name}
                  />
                </Card.Header>
              ) : null}
              <Card.Body>
                {drink.servingSize ? (
                  <Text
                    textStyle="tag.2.mono"
                    color="neutral.500"
                    textTransform="uppercase"
                  >
                    {drink.servingSize}
                  </Text>
                ) : null}
                <Card.Title>{drink.name}</Card.Title>
                {drink.description ? (
                  <Card.Description>{drink.description}</Card.Description>
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
  );
}
