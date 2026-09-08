import qs from "qs";

const brewMethodFields = [
  "name",
  "slug",
  "description",
  "method_type",
] as const;

const brewMethodPopulate = {
  cover: {
    fields: ["url", "alternativeText", "width", "height", "formats"],
  },
};

export const queryBrewMethods = () =>
  qs.stringify(
    {
      fields: [...brewMethodFields],
      populate: brewMethodPopulate,
      sort: ["name:asc"],
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true },
  );

export const queryBrewMethodBySlug = (slug: string) =>
  qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      fields: [...brewMethodFields],
      populate: brewMethodPopulate,
    },
    { encodeValuesOnly: true },
  );
