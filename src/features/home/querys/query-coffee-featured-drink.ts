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
