import { ApiResponse, StrapiEntry } from "@/shared/types/strapi-response";

export interface MilkRatioInterface extends StrapiEntry {
  name: string;
  slug: string;
  description: string;
}

export type MilkRatioResponse = ApiResponse<MilkRatioInterface[]>;
export type MilkRatioSingleResponse = ApiResponse<MilkRatioInterface>;
