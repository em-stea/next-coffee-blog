import localFont from "next/font/local";

export const Interstate = localFont({
  src: [
    {
      path: "../../../public/fonts/interstate-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/interstate-bold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--fontfamily-primary",
});

export const InterstateCondensed = localFont({
  src: [
    {
      path: "../../../public/fonts/interstate-condensed-bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/interstate-black-condensed.woff",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--fontfamily-secondary",
});

export const WalterNeeu = localFont({
  src: [
    {
      path: "../../../public/fonts/walterNeue-normal.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--fontfamily-tertiary",
});

export const variablesForHtml = [
  Interstate.variable,
  InterstateCondensed.variable,
  WalterNeeu.variable,
].join(" ");
