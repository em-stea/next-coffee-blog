import { FC } from "react";
import type { ButtonLinkProps, LinkProps, LogoProps } from "./data";
import { HeaderItems } from "./item-links";

export const HeaderItem: FC<{
  data: LinkProps | LogoProps | ButtonLinkProps;
}> = ({ data }) => {
  if (data.variant === "text") {
    return <HeaderItems.TextLink data={data} />;
  }

  if (data.variant === "logo") {
    return <HeaderItems.LogoLink data={data} />;
  }

  if (data.variant === "button") {
    return <HeaderItems.ButtonLink data={data} />;
  }

  return null;
};
