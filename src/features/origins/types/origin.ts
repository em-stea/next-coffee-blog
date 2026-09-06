import { ApiResponse, StrapiEntry } from "@/shared/types/strapi-response";

export interface OriginInterface extends StrapiEntry {
  name: string;
  slug: string;
  region:
    | "East Africa"
    | "South America"
    | "Central America"
    | "Middle East"
    | null;
  altitudeRange: string | null;
  harvestSeason: string | null;
  description: string | null;
  sortOrder: number | null;
}

export type OriginResponse = ApiResponse<OriginInterface[]>;
export type OriginSingleResponse = ApiResponse<OriginInterface>;
