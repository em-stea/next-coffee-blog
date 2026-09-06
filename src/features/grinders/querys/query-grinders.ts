import qs from "qs";
import { strapiMediaFields } from "@/shared/utils/strapi-media";

const grinderFields = ["name", "slug", "type", "burrType", "description"] as const;

const grinderPopulate = {
  cover: {
    fields: [...strapiMediaFields],
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
