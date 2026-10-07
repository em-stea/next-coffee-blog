"use client";

import {
  Accordion,
  Avatar,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AccesoriesInterface } from "../../types/accesories";
import { base } from "framer-motion/client";

export const AccordionAccesories = ({
  items,
}: {
  items: AccesoriesInterface[];
}) => {
  const [value, setValue] = useState([items[0].slug]);

  return (
    <Stack my={{ base: "10", desktop: "20" }}>
      <Accordion.Root value={value} onValueChange={(e) => setValue(e.value)}>
        {items.map((item) => (
          <Accordion.Item key={item.slug} value={item.slug}>
            <Accordion.ItemTrigger>
              <Heading flex="1" textStyle="subtitle.4" color="neutral.300">
                {item.name}
              </Heading>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Box
                  borderRadius="8px"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="amber.500"
                >
                  <Image src={item.cover.url} alt={item.name} w="60rem" />
                </Box>
                <VStack align="flex-start" justify="center">
                  <Text textStyle="body.2" color="neutral.300">
                    {item.description}
                  </Text>
                  <Text textStyle="body.3.semibold" color="neutral.0" mt="4">
                    INSTRUCTIONS FOR USE:
                  </Text>
                  <Text textStyle="body.2" color="neutral.300">
                    {item.instructionsForUse}
                  </Text>
                </VStack>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  );
};
