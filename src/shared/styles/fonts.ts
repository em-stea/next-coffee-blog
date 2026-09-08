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
      path: "../../../public/fonts/interstate-regular-condense.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/interstate-condensed-bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/interstate-black-condensed.woff",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--fontfamily-secondary",
});

export const variablesForHtml = [
  Interstate.variable,
  InterstateCondensed.variable,
].join(" ");
