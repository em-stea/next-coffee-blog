import qs from "qs";

const accesoryFields = [
  "name",
  "slug",
  "description",
  "instructionsForUse",
] as const;

const accesoryPopulate = {
  cover: {
    fields: ["url", "alternativeText", "width", "height", "formats"],
  },
};

export const queryAccesories = () =>
  qs.stringify(
    {
      fields: [...accesoryFields],
      populate: accesoryPopulate,
      sort: ["name:asc"],
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true },
  );

export const queryAccesoryBySlug = (slug: string) =>
  qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      fields: [...accesoryFields],
      populate: accesoryPopulate,
    },
    { encodeValuesOnly: true },
  );
