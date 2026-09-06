"use client";

import {
  createSlotRecipeContext,
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
} from "@chakra-ui/react";

const { withProvider, withContext } = createSlotRecipeContext({
  key: "pageSection",
});

export interface PageSectionRootProps
  extends HTMLChakraProps<"section">,
    SlotRecipeProps<"pageSection">,
    UnstyledProp {}

export const PageSectionRoot = withProvider<HTMLElement, PageSectionRootProps>(
  "section",
  "root",
);
export const PageSectionInner = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "inner");
export const PageSectionHeader = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "header");
export const PageSectionEyebrow = withContext<
  HTMLParagraphElement,
  HTMLChakraProps<"p">
>("p", "eyebrow");
export const PageSectionTitle = withContext<
  HTMLHeadingElement,
  HTMLChakraProps<"h2">
>("h2", "title");
export const PageSectionDescription = withContext<
  HTMLParagraphElement,
  HTMLChakraProps<"p">
>("p", "description");
export const PageSectionBody = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "body");
