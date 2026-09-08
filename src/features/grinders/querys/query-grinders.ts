import qs from "qs";

const grinderFields = [
  "name",
  "slug",
  "type",
  "burrType",
  "description",
] as const;

const grinderPopulate = {
  cover: {
    fields: ["url", "alternativeText", "width", "height", "formats"],
  },
};

export const queryGrinders = () =>
  qs.stringify(
    {
      fields: [...grinderFields],
      populate: grinderPopulate,
      sort: ["name:asc"],
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true },
  );

export const queryGrinderBySlug = (slug: string) =>
  qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      fields: [...grinderFields],
      populate: grinderPopulate,
    },
    { encodeValuesOnly: true },
  );
