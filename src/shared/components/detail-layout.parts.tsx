"use client";

import {
  createSlotRecipeContext,
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
} from "@chakra-ui/react";

const { withProvider, withContext } = createSlotRecipeContext({
  key: "detailLayout",
});

export interface DetailLayoutRootProps
  extends HTMLChakraProps<"article">,
    SlotRecipeProps<"detailLayout">,
    UnstyledProp {}

export const DetailLayoutRoot = withProvider<
  HTMLElement,
  DetailLayoutRootProps
>("article", "root");
export const DetailLayoutMedia = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "media");
export const DetailLayoutContent = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "content");
export const DetailLayoutEyebrow = withContext<
  HTMLParagraphElement,
  HTMLChakraProps<"p">
>("p", "eyebrow");
export const DetailLayoutTitle = withContext<
  HTMLHeadingElement,
  HTMLChakraProps<"h1">
>("h1", "title");
export const DetailLayoutLead = withContext<
  HTMLParagraphElement,
  HTMLChakraProps<"p">
>("p", "lead");
export const DetailLayoutMeta = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "meta");
export const DetailLayoutMetaItem = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "metaItem");
export const DetailLayoutBody = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "body");
