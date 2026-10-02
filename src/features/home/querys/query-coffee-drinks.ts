import qs from "qs";

type QueryCoffeeDrinksProps = {
  pageSize?: number;
  sort?: string[];
};

export const queryCoffeeDrinks = ({
  pageSize = 100,
  sort = ["sortOrder:asc"],
}: QueryCoffeeDrinksProps = {}) =>
  qs.stringify(
    {
      fields: [
        "name",
        "slug",
        "description",
        "instructions",
        "foamType",
        "sortOrder",
      ],
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height", "formats"],
        },
        milk_ratio: {
          fields: ["name", "slug", "description"],
        },
        drinks_category: {
          fields: ["name", "slug"],
        },
        serving_size: {
          fields: ["name", "minimumSize", "maximumSize"],
        },
        espresso_shot: {
          fields: ["name", "minimumVolume", "maximumVolume"],
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
          fields: ["url", "alternativeText", "width", "height", "formats"],
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
