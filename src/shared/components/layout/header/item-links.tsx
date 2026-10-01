import { Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import useBreakpoint from "@/shared/hooks/use-breakpoint";
import { CupIcon } from "../../icons";
import type { ButtonLinkProps, LinkProps, LogoProps } from "./data";
import { motion, useScroll } from "framer-motion";

interface ItemProps<T> {
  data: T;
}

const MotionBox = motion.create(HStack);

const TextLinkItem: FC<ItemProps<LinkProps>> = ({ data }) => {
  return (
    <Link href={data.href || "/"}>
      <Text
        textStyle="body.2.semibold"
        cursor="pointer"
        color="neutral.900"
        _hover={{ color: "coffee.700" }}
      >
        {data.title}
      </Text>
    </Link>
  );
};

const LogoLinkItem: FC<ItemProps<LogoProps>> = ({ data }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <Link href={data.href} aria-label="Home">
      <HStack gap="4" justifyContent="flex-end" alignItems="flex-end">
        <CupIcon
          boxSize="35px"
          color="neutral.900"
          _hover={{
            "& .cup-fill": { fill: "coffee.700" },
          }}
          cursor="pointer"
        />
        <MotionBox
          overflow="hidden"
          initial={false}
          animate={{
            x: isScrolled ? -20 : 0, // Se desplaza a la izquierda
            opacity: isScrolled ? 0 : 1, // Desaparece con fade
            maxWidth: isScrolled ? "0px" : "100px", // Contrae el espacio horizontal
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          whiteSpace="nowrap"
        >
          <Text
            textStyle="body.3.semibold"
            color="neutral.900"
            textTransform="uppercase"
            lineHeight="1rem"
          >
            Typica
          </Text>
        </MotionBox>
      </HStack>
    </Link>
  );
};

const ButtonLinkItem: FC<ItemProps<ButtonLinkProps>> = ({ data }) => {
  const { isLargerThanMD } = useBreakpoint();
  return (
    <Button
      variant="solid"
      size="md"
      isInverted={isLargerThanMD ? true : false}
      asChild
    >
      <Link href={data.href || "/"}>{data.title}</Link>
    </Button>
  );
};

export const HeaderItems = {
  TextLink: TextLinkItem,
  LogoLink: LogoLinkItem,
  ButtonLink: ButtonLinkItem,
};
