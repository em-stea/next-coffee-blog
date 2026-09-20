import qs from "qs";

type QueryBrewMethodsProps = {
  pageSize?: number;
  sort?: string[];
};

export const queryBrewMethods = ({
  pageSize = 100,
  sort = ["sortOrder:desc"],
}: QueryBrewMethodsProps = {}) =>
  qs.stringify(
    {
      fields: [
        "name",
        "slug",
        "description",
        "method_type",
        "extraction_type",
        "sortOrder",
      ],
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height", "formats"],
        },
        video: {
          fields: ["url"],
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
