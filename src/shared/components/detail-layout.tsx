import { Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import type { StrapiMedia } from "@/shared/types/strapi-response";
import { getStrapiImageUrl } from "@/shared/utils/strapi-media";
import {
  DetailLayoutBody,
  DetailLayoutContent,
  DetailLayoutEyebrow,
  DetailLayoutLead,
  DetailLayoutMedia,
  DetailLayoutMeta,
  DetailLayoutMetaItem,
  DetailLayoutRoot,
  DetailLayoutTitle,
} from "./detail-layout.parts";

type MetaItem = {
  label: string;
  value: string;
};

type DetailLayoutProps = {
  eyebrow?: string;
  title: string;
  lead?: string | null;
  image?: StrapiMedia | null;
  meta?: MetaItem[];
  children?: ReactNode;
};

export function DetailLayout({
  eyebrow,
  title,
  lead,
  image,
  meta = [],
  children,
}: DetailLayoutProps) {
  const resolvedImage = getStrapiImageUrl(image, [
    "large",
    "medium",
    "small",
  ]);

  return (
    <DetailLayoutRoot>
      <DetailLayoutMedia>
        {resolvedImage ? (
          <Image
            src={resolvedImage}
            alt={image?.alternativeText?.trim() || title}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        ) : null}
      </DetailLayoutMedia>
      <DetailLayoutContent>
        {eyebrow ? <DetailLayoutEyebrow>{eyebrow}</DetailLayoutEyebrow> : null}
        <DetailLayoutTitle>{title}</DetailLayoutTitle>
        {lead ? <DetailLayoutLead>{lead}</DetailLayoutLead> : null}
        {meta.length > 0 ? (
          <DetailLayoutMeta>
            {meta.map((item) => (
              <DetailLayoutMetaItem key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </DetailLayoutMetaItem>
            ))}
          </DetailLayoutMeta>
        ) : null}
        {children ? <DetailLayoutBody>{children}</DetailLayoutBody> : null}
      </DetailLayoutContent>
    </DetailLayoutRoot>
  );
}
