import qs from "qs";

export const queryProcessMethods = () =>
  qs.stringify(
    {
      fields: ["name", "slug", "description", "sortOrder"],
      sort: ["sortOrder:asc", "name:asc"],
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true },
  );
