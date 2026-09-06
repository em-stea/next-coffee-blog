import qs from "qs";
import { strapiMediaFields } from "@/shared/utils/strapi-media";

type QueryCoffeeDrinksProps = {
  pageSize?: number;
  sort?: string[];
};

export const queryCoffeeDrinks = ({
  pageSize = 100,
  sort = ["sortOrder:asc", "name:asc"],
}: QueryCoffeeDrinksProps = {}) =>
  qs.stringify(
    {
      fields: [
        "name",
        "slug",
        "description",
        "servingSize",
        "instructions",
        "sortOrder",
        "foamType",
        "espressoShots",
      ],
      populate: {
        cover: {
          fields: [...strapiMediaFields],
        },
        milk_ratio: {
          fields: ["name", "slug", "description"],
        },
      },
      pagination: {
        pageSize,
      },
      sort,
    },
    {
      encodeValuesOnly: true,
    },
  );

export const queryCoffeeDrinkBySlug = (slug: string) =>
  qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: [
        "name",
        "slug",
        "description",
        "servingSize",
        "instructions",
        "sortOrder",
        "foamType",
        "espressoShots",
      ],
      populate: {
        cover: {
          fields: [...strapiMediaFields],
        },
        milk_ratio: {
          fields: ["name", "slug", "description"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
