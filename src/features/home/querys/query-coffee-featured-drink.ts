import qs from "qs";
import { strapiMediaFields } from "@/shared/utils/strapi-media";

type QueryCoffeeDrinksProps = {
  filters?: {
    slug?: string;
  };
};

export const queryCoffeeFeaturedDrink = ({
  filters,
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
        pageSize: 1,
      },
      filters: {
        slug: {
          $eq: filters?.slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
