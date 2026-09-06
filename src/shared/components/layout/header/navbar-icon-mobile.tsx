"use client";

import { Box } from "@chakra-ui/react";

export const NavBarIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <Box
      as="span"
      role="button"
      tabIndex={0}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      gap="4px"
      position="relative"
      h="38px"
      justifyContent="center"
      bg="transparent"
      border="none"
      p="0"
      _focus={{ outline: "none" }}
      _active={{ outline: "none", bgColor: "transparent" }}
    >
      <Box
        w="25px"
        h="3px"
        bgColor="neutral.900"
        borderRadius="full"
        transform={`rotate(${isOpen ? 45 : 0}deg)`}
        position="relative"
        top={isOpen ? "7px" : 0}
        transition="all 0.25s ease-in-out"
      />
      <Box
        w="25px"
        h="3px"
        bgColor="neutral.900"
        borderRadius="full"
        opacity={isOpen ? 0 : 1}
        position="relative"
        top={isOpen ? "3px" : 0}
        transition="all 0.25s ease-in-out"
      />
      <Box
        w="25px"
        h="3px"
        bgColor="neutral.900"
        borderRadius="full"
        transform={`rotate(${isOpen ? -45 : 0}deg)`}
        position="relative"
        bottom={isOpen ? "7px" : 0}
        transition="all 0.25s ease-in-out"
      />
    </Box>
  );
};
