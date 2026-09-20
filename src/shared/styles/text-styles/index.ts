import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  "title.1": {
    description: "Title 1",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 600,
      fontSize: { base: "2.2rem", desktop: "3.75rem" },
      lineHeight: { base: "2.5rem", desktop: "4.25rem" },
    },
  },
  "title.2": {
    description: "Title 2",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 600,
      fontSize: { base: "2.75rem", desktop: "3rem" },
      lineHeight: { base: "3.5rem", desktop: "3.45rem" },
    },
  },
  "title.3": {
    description: "Title 2",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 600,
      fontSize: { base: "2.75rem", desktop: "2.5rem" },
      lineHeight: { base: "3.5rem", desktop: "4.25rem" },
    },
  },

  "subtitle.1": {
    description: "Subtitle 1",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 400,
      fontSize: { base: "1.125rem", desktop: "1.5rem" },
      lineHeight: { base: "1.375rem", desktop: "2rem" },
    },
  },
  "subtitle.2": {
    description: "Subtitle 1",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 600,
      fontSize: { base: "1.8rem", desktop: "1.8rem" },
      lineHeight: { base: "2rem", desktop: "2rem" },
    },
  },
  "subtitle.3": {
    description: "Subtitle 1",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 600,
      fontSize: { base: "1.4rem", desktop: "1.4rem" },
      lineHeight: { base: "1.375rem", desktop: "2rem" },
    },
  },

  "body.1": {
    description: "Body 1",
    value: {
      fontFamily: "var(--fontfamily-tertiary)",
      fontWeight: 400,
      fontSize: { base: "0.9375rem", desktop: "0.875rem" },
      lineHeight: { base: "1.375rem", desktop: "1.5rem" },
    },
  },
  "body.2": {
    description: "Body 1",
    value: {
      fontFamily: "var(--fontfamily-tertiary)",
      fontWeight: 400,
      fontSize: { base: "1rem", desktop: "1rem" },
      lineHeight: { base: "1.375rem", desktop: "1.5rem" },
    },
  },
  "body.2.semibold": {
    description: "Body 2 Semibold",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 600,
      fontSize: { base: "0.875rem", desktop: "0.875rem" },
      lineHeight: { base: "1.125rem", desktop: "1.25rem" },
      textTransform: "uppercase",
    },
  },
  "body.3.semibold": {
    description: "Body 2 Semibold",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 600,
      fontSize: { base: "0.8125rem", desktop: "1rem" },
      lineHeight: { base: "1.125rem", desktop: "1.8rem" },
      letterSpacing: "0.018rem",
      textTransform: "uppercase",
    },
  },
  "button.1": {
    description: "Button 1",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 400,
      fontSize: { base: "0.9375rem", desktop: "0.8rem" },
      lineHeight: { base: "1.375rem", desktop: "1.5rem" },
      textTransform: "uppercase",
      letterSpacing: "0.060rem",
    },
  },
  "tag.1": {
    description: "Tag 1",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 500,
      fontSize: { base: "0.85rem", desktop: "0.775rem" },
      lineHeight: { base: "0.9375rem", desktop: "1rem" },
      letterSpacing: "0.030rem",
      textTransform: "uppercase",
    },
  },
  eyebrow: {
    description: "Body 1",
    value: {
      fontFamily: "var(--fontfamily-primary)",
      fontWeight: 400,
      fontSize: { base: "0.9375rem", desktop: "0.9rem" },
      lineHeight: { base: "1.375rem", desktop: "1.5rem" },
      textTransform: "uppercase",
      letterSpacing: "0.060rem",
    },
  },

  // "body.3.semibold": {
  //   description: "Body 3 Semibold",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "0.8125rem", desktop: "0.9rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1.25rem" },
  //   },
  // },
  // "title.2": {
  //   description: "Title 2",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "2.5rem", desktop: "3rem" },
  //     lineHeight: { base: "3rem", desktop: "3.5rem" },
  //   },
  // },
  // "title.3": {
  //   description: "Title 3",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "1.875rem", desktop: "2.25rem" },
  //     lineHeight: { base: "2.25rem", desktop: "2.5rem" },
  //   },
  // },
  // "title.4": {
  //   description: "Title 4",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "1.25rem", desktop: "1.5rem" },
  //     lineHeight: { base: "1.75rem", desktop: "2rem" },
  //   },
  // },
  // "subtitle.1": {
  //   description: "Subtitle 1",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "1.125rem", desktop: "1rem" },
  //     lineHeight: { base: "1.375rem", desktop: "1.5rem" },
  //   },
  // },
  // "subtitle.2": {
  //   description: "Subtitle 2",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 500,
  //     fontSize: { base: "1.125rem", desktop: "1.25rem" },
  //     lineHeight: { base: "1.375rem", desktop: "1.5rem" },
  //   },
  // },
  // "subtitle.3": {
  //   description: "Subtitle 3",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "1.125rem", desktop: "1.25rem" },
  //     lineHeight: { base: "1.375rem", desktop: "1.5rem" },
  //   },
  // },
  // "subtitle.bold": {
  //   description: "Subtitle Bold",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "1.125rem", desktop: "1.25rem" },
  //     lineHeight: { base: "1.375rem", desktop: "1.5rem" },
  //   },
  // },

  // "body.2": {
  //   description: "Body 2",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "0.8125rem", desktop: "0.875rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1.25rem" },
  //     letterSpacing: "0.018rem",
  //   },
  // },
  // "body.2.mono": {
  //   description: "Body 2 Mono",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "0.8125rem", desktop: "0.875rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1.25rem" },
  //     letterSpacing: "0.018rem",
  //   },
  // },
  // "body.1.semibold": {
  //   description: "Body 1 Semibold",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "0.9375rem", desktop: "1rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1.25rem" },
  //   },
  // },
  // "body.2.semibold": {
  //   description: "Body 2 Semibold",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "0.8125rem", desktop: "0.875rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1.25rem" },
  //   },
  // },
  // "body.3": {
  //   description: "Body 3",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "0.8125rem", desktop: "0.875rem" },
  //     lineHeight: { base: "0.9375rem", desktop: "1rem" },
  //   },
  // },
  // "body.2.semibold.mono": {
  //   description: "Body 2 Semibold Mono",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "0.8125rem", desktop: "0.875rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1.25rem" },
  //   },
  // },

  // "button.1": {
  //   description: "Button 1",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "1.125rem", desktop: "1rem" },
  //     lineHeight: { base: "1.5rem", desktop: "1.375rem" },
  //   },
  // },
  // "button.2": {
  //   description: "Button 2",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "1rem", desktop: "0.875rem" },
  //     lineHeight: { base: "1.5rem", desktop: "1.375rem" },
  //   },
  // },
  // "button.3": {
  //   description: "Button 3",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "0.875rem", desktop: "0.75rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1rem" },
  //   },
  // },
  // "button.mono": {
  //   description: "Button Mono",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 500,
  //     fontSize: { base: "0.875rem", desktop: "0.875rem" },
  //     lineHeight: { base: "1.125rem", desktop: "1.375rem" },
  //     letterSpacing: "0.018rem",
  //   },
  // },
  // eyebrow: {
  //   description: "Eyebrow",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 600,
  //     fontSize: { base: "0.6875rem", desktop: "0.75rem" },
  //     lineHeight: { base: "0.875rem", desktop: "1rem" },
  //     letterSpacing: "0.03rem",
  //   },
  // },
  // "tag.1": {
  //   description: "Tag 1",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 500,
  //     fontSize: { base: "0.8125rem", desktop: "0.875rem" },
  //     lineHeight: { base: "0.9375rem", desktop: "1rem" },
  //   },
  // },
  // "tag.2": {
  //   description: "Tag 2",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 500,
  //     fontSize: { base: "0.6875rem", desktop: "0.75rem" },
  //     lineHeight: { base: "0.875rem", desktop: "1rem" },
  //   },
  // },

  // input: {
  //   description: "Input label (legacy)",
  //   value: {
  //     fontFamily: "var(--fontfamily-primary)",
  //     fontWeight: 400,
  //     fontSize: { base: "0.6875rem", desktop: "0.75rem" },
  //     lineHeight: { base: "1.25rem", desktop: "1.5rem" },
  //   },
  // },
});
