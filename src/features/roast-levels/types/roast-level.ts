import { ApiResponse, StrapiEntry } from "@/shared/types/strapi-response";

export interface RoastLevelInterface extends StrapiEntry {
  name: string;
  slug: string;
  description: string | null;
}

export type RoastLevelResponse = ApiResponse<RoastLevelInterface[]>;
export type RoastLevelSingleResponse = ApiResponse<RoastLevelInterface>;
