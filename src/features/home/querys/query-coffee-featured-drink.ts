import qs from "qs";

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
        "instructions",
        "sortOrder",
        "foamType",
      ],
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height", "formats"],
        },
        milk_ratio: {
          fields: ["name", "slug", "description"],
        },
        serving_size: {
          fields: ["name", "minimumSize", "maximumSize"],
        },
        espresso_shot: {
          fields: ["name", "minimumVolume", "maximumVolume"],
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
