"use client";

import {
  createSlotRecipeContext,
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
} from "@chakra-ui/react";

const { withProvider, withContext } = createSlotRecipeContext({
  key: "siteFooter",
});

export interface SiteFooterRootProps
  extends HTMLChakraProps<"footer">,
    SlotRecipeProps<"siteFooter">,
    UnstyledProp {}

export const SiteFooterRoot = withProvider<HTMLElement, SiteFooterRootProps>(
  "footer",
  "root",
);
export const SiteFooterInner = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "inner");
export const SiteFooterBrand = withContext<
  HTMLDivElement,
  HTMLChakraProps<"div">
>("div", "brand");
export const SiteFooterCopy = withContext<
  HTMLParagraphElement,
  HTMLChakraProps<"p">
>("p", "copy");
export const SiteFooterNav = withContext<HTMLElement, HTMLChakraProps<"nav">>(
  "nav",
  "nav",
);
