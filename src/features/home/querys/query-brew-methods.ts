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
        "difficulty",
        "method_type",
        "extraction_type",
        "brew_time",
        "time_note",
        "sortOrder",
      ],
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height", "formats"],
        },
        video: {
          fields: ["url"],
        },
        coffee_ratio: {
          fields: ["ratio", "detail"],
        },
        grind_size: {
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
