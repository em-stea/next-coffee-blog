import { Button, Card, Heading, Tag, Text } from "@chakra-ui/react";
import { CoffeeFundamentals } from "../../data/coffee-fundamentals";
import { ArrowRightIcon } from "@/shared/components/icons";

type FundamentalItemCardProps = {
  index: number;
  item: CoffeeFundamentals;
};

export const FundamentalItemCard = ({
  index,
  item,
}: FundamentalItemCardProps) => {
  const { tag, title, description, action } = item;

  return (
    <Card.Root variant="fundamental" className="group">
      <Card.Header>
        <Heading color="amber.500" textStyle="subtitle.2">
          0{index + 1}
        </Heading>
        <Tag.Root variant="fundamental">
          <Tag.Label>{tag}</Tag.Label>
        </Tag.Root>
      </Card.Header>

      <Card.Body>
        <Heading textStyle="subtitle.2" color="neutral.0" pb="4">
          {title}
        </Heading>
        <Text textStyle="body.2" color="neutral.0">
          {description}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="text-link" colorScheme="primary" pb="0">
          {action.label}
          <ArrowRightIcon boxSize="10px" />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
