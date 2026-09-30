import qs from "qs";

type QueryDrinksCategoriesProps = {
  pageSize?: number;
};

export const queryDrinksCategories = ({
  pageSize = 100,
}: QueryDrinksCategoriesProps = {}) =>
  qs.stringify(
    {
      fields: ["name", "slug"],
      pagination: {
        pageSize,
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
