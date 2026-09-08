import Layout from "@/shared/components/layout";
import { Provider } from "@/shared/providers/chakra-provider";
import { EmotionRegistry } from "@/shared/providers/emotion-registry";
import { variablesForHtml } from "@/shared/styles/fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Café Notes",
  description:
    "A coffee journal covering drinks, varieties, brew methods, grinders, and gear.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={variablesForHtml} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <EmotionRegistry>
          <Provider>
            <Layout>{children}</Layout>
          </Provider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
