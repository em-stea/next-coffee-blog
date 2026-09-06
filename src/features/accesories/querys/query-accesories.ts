import qs from "qs";
import { strapiMediaFields } from "@/shared/utils/strapi-media";

const accesoryFields = [
  "name",
  "slug",
  "description",
  "instructionsForUse",
] as const;

const accesoryPopulate = {
  cover: {
    fields: [...strapiMediaFields],
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
