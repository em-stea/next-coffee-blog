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
        "servingSize",
        "instructions",
        "sortOrder",
        "foamType",
        "espressoShots",
      ],
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height", "formats"],
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
