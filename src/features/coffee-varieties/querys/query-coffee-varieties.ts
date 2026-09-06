import qs from "qs";

const coffeeVarietyFields = ["name", "slug", "flavorProfile"] as const;

const coffeeVarietyPopulate = {
  origin: {
    fields: [
      "name",
      "slug",
      "region",
      "altitudeRange",
      "harvestSeason",
      "description",
    ],
  },
  process_method: {
    fields: ["name", "slug", "description"],
  },
  roast_level: {
    fields: ["name", "slug", "description"],
  },
};

export const queryCoffeeVarieties = () =>
  qs.stringify(
    {
      fields: [...coffeeVarietyFields],
      populate: coffeeVarietyPopulate,
      sort: ["name:asc"],
      pagination: { pageSize: 100 },
    },
    { encodeValuesOnly: true },
  );

export const queryCoffeeVarietyBySlug = (slug: string) =>
  qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      fields: [...coffeeVarietyFields],
      populate: coffeeVarietyPopulate,
    },
    { encodeValuesOnly: true },
  );
