"use client";

import { createListCollection, Select } from "@chakra-ui/react";
import { useMemo } from "react";

export interface SelectOption {
  name: string;
  slug: string;
}

interface InputSelectProps<T extends SelectOption> {
  collection: T[];
  placeholder: string;
  selected: T | null;
  setSelected: (selected: T | null) => void;
  disabledSlug: string | null;
}

export const InputSelect = <T extends SelectOption>({
  collection,
  placeholder,
  selected,
  setSelected,
  disabledSlug,
}: InputSelectProps<T>) => {
  const listCollection = useMemo(
    () =>
      createListCollection({
        items: collection,
        itemToString: (item) => item.name,
        itemToValue: (item) => item.slug,
        isItemDisabled: (item) => item.slug === disabledSlug,
      }),
    [collection, disabledSlug],
  );

  return (
    <Select.Root
      collection={listCollection}
      value={selected ? [selected.slug] : []}
      onValueChange={(details) => {
        const chosenSlug = details.value[0];
        const item = collection.find((i) => i.slug === chosenSlug) ?? null;
        setSelected(item);
      }}
    >
      <Select.HiddenSelect />
      <Select.Label />

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder}>
            {selected?.name}
          </Select.ValueText>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Select.Positioner>
        <Select.Content>
          {collection.map((item) => (
            <Select.Item
              key={item.slug}
              item={item}
              onSelect={() => setSelected(item)}
            >
              <Select.ItemText>{item.name}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
