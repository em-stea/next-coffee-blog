import qs from "qs";

export const queryOrigins = () =>
  qs.stringify(
    {
      fields: [
        "name",
        "slug",
        "region",
        "altitudeRange",
        "harvestSeason",
        "description",
        "sortOrder",
      ],
      sort: ["sortOrder:asc", "name:asc"],
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true },
  );

export const queryOriginBySlug = (slug: string) =>
  qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      fields: [
        "name",
        "slug",
        "region",
        "altitudeRange",
        "harvestSeason",
        "description",
        "sortOrder",
      ],
    },
    { encodeValuesOnly: true },
  );
