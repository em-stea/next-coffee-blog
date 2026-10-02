import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { Card } from "@chakra-ui/react";

export const SelectedCard = ({ drink }: { drink: CoffeeDrinkInterface }) => {
  const { cover } = drink;
  return (
    <Card.Root variant="highlight">
      <Card.Header>
        <ResponsivePicture image={cover} alt={drink.name} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{drink.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};
