import { HeroAccesories } from "@/features/accesories/components/hero-accesories/hero-accesories";
import { AccordionAccesories } from "@/features/accesories/components/list-accesories/accordion-accesories";
import { StackCardAccesories } from "@/features/accesories/components/list-accesories/stack-card-accesories";
import { queryAccesories } from "@/features/accesories/querys/query-accesories";
import { getAccesories } from "@/features/accesories/services/get-accesories";
import { Container } from "@chakra-ui/react";
import { notFound } from "next/navigation";

export default async function AccesoriesPage() {
  "use cache";

  const { firstFeatured, secondFeatured, rest } =
    await getAccesories(queryAccesories());

  if (!firstFeatured || !secondFeatured || !rest) notFound();

  return (
    <>
      <HeroAccesories />
      <Container>
        <StackCardAccesories data={[firstFeatured, secondFeatured]} />
      </Container>
      <AccordionAccesories items={rest} />
    </>
  );
}
