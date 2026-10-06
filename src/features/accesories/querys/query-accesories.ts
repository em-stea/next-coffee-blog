import qs from "qs";

type QueryAccesoriesProps = {
  pageSize?: number;
};

export const queryAccesories = ({
  pageSize = 100,
}: QueryAccesoriesProps = {}) =>
  qs.stringify(
    {
      fields: [
        "name",
        "slug",
        "description",
        "instructionsForUse",
        "sortOrder",
      ],
      populate: {
        cover: {
          fields: ["url"],
        },
      },
      pagination: {
        pageSize,
      },
      sort: ["sortOrder:asc"],
    },
    {
      encodeValuesOnly: true,
    },
  );
