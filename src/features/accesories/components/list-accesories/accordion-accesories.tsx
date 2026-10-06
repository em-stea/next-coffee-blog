"use client";

import { Accordion, Avatar, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AccesoriesInterface } from "../../types/accesories";

export const AccordionAccesories = ({
  items,
}: {
  items: AccesoriesInterface[];
}) => {
  const [value, setValue] = useState([items[0].slug]);

  return (
    <Stack my="20">
      <Accordion.Root value={value} onValueChange={(e) => setValue(e.value)}>
        {items.map((item) => (
          <Accordion.Item key={item.slug} value={item.slug}>
            <Accordion.ItemTrigger>
              <Avatar.Root shape="square" borderRadius="8px">
                <Avatar.Image src={item.cover.url} alt={item.name} />
              </Avatar.Root>
              <Heading flex="1" textStyle="subtitle.4" color="neutral.300">
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
