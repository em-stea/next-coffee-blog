"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../styles";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
