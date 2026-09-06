import qs from "qs";

export const queryMilkRatios = () =>
  qs.stringify(
    {
      fields: ["name", "slug", "description"],
      sort: ["name:asc"],
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true },
  );
