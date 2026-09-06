import { ReactNode } from "react";
import {
  PageSectionBody,
  PageSectionDescription,
  PageSectionEyebrow,
  PageSectionHeader,
  PageSectionInner,
  PageSectionRoot,
  PageSectionTitle,
} from "./page-section.parts";

type PageSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "primary" | "secondary" | "muted";
  children: ReactNode;
};

export function PageSection({
  eyebrow,
  title,
  description,
  tone = "primary",
  children,
}: PageSectionProps) {
  return (
    <PageSectionRoot tone={tone}>
      <PageSectionInner>
        <PageSectionHeader>
          {eyebrow ? <PageSectionEyebrow>{eyebrow}</PageSectionEyebrow> : null}
          <PageSectionTitle>{title}</PageSectionTitle>
          {description ? (
            <PageSectionDescription>{description}</PageSectionDescription>
          ) : null}
        </PageSectionHeader>
        <PageSectionBody>{children}</PageSectionBody>
      </PageSectionInner>
    </PageSectionRoot>
  );
}
