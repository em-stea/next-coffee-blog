"use client";

import {
  createSlotRecipeContext,
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
} from "@chakra-ui/react";

const { withProvider, withContext } = createSlotRecipeContext({
  key: "hero",
});

export interface HeroRootProps
  extends HTMLChakraProps<"section">,
    SlotRecipeProps<"hero">,
    UnstyledProp {}

export const HeroRoot = withProvider<HTMLElement, HeroRootProps>(
  "section",
  "root",
);
export const HeroMedia = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "media");
export const HeroOverlay = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "overlay");
export const HeroContent = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "content");
export const HeroEyebrow = withContext<
  HTMLParagraphElement,
  HTMLChakraProps<"p">
>("p", "eyebrow");
export const HeroTitle = withContext<
  HTMLHeadingElement,
  HTMLChakraProps<"h1">
>("h1", "title");
export const HeroSubtitle = withContext<
  HTMLParagraphElement,
  HTMLChakraProps<"p">
>("p", "subtitle");
export const HeroActions = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "actions");
