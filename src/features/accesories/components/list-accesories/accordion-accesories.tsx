"use client";

import { Accordion, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AccesoriesInterface } from "../../types/accesories";

export const AccordionAccesories = ({
  items,
}: {
  items: AccesoriesInterface[];
}) => {
  const [value, setValue] = useState(["digital-coffee-scale"]);

  return (
    <Stack my="20">
      <Accordion.Root value={value} onValueChange={(e) => setValue(e.value)}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.slug}>
            <Accordion.ItemTrigger>
              <Heading flex="1" textStyle="subtitle.2" color="amber.500">
                {item.name}
              </Heading>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.slug}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  );
};
