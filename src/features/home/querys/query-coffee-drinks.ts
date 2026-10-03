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
      fields: ["name", "slug", "description", "instructions", "sortOrder"],
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height", "formats"],
        },
        drinks_category: {
          fields: ["name", "slug"],
        },
        drink_recipe: {
          fields: ["name", "foam_type"],
          populate: {
            serving_size: {
              fields: ["name", "minimumSize", "maximumSize"],
            },
            espresso_shot: {
              fields: ["name", "minimumVolume", "maximumVolume"],
            },
            milk_ratio: {
              populate: {
                liquid_ratio: {
                  fields: ["name"],
                },
              },
            },
            water_ratio: {
              populate: {
                liquid_ratio: {
                  fields: ["name"],
                },
              },
            },
            whiskey_ratio: {
              populate: {
                liquid_ratio: {
                  fields: ["name"],
                },
              },
            },
            syrup_ratio: {
              populate: {
                liquid_ratio: {
                  fields: ["name"],
                },
              },
            },
          },
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
