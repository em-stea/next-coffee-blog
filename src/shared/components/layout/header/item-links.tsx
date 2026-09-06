import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { CupIcon } from "../../icons/others/cup";
import type { ButtonLinkProps, LinkProps, LogoProps } from "./data";
import useBreakpoint from "@/shared/hooks/use-breakpoint";

interface ItemProps<T> {
  data: T;
}

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
  return (
    <Link href={data.href} aria-label="Home">
      <CupIcon boxSize="35px" color="neutral.900" cursor="pointer" />
    </Link>
  );
};

const ButtonLinkItem: FC<ItemProps<ButtonLinkProps>> = ({ data }) => {
  const { isLargerThanMD } = useBreakpoint();
  return (
    <Button
      variant="solid"
      size="md"
      isInverted={isLargerThanMD ? false : true}
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
