import {
  ApiResponse,
  StrapiEntry,
  StrapiMedia,
} from "@/shared/types/strapi-response";

export interface BrewMethodInterface extends StrapiEntry {
  name: string;
  slug: string;
  description: string;
  method_type: string;
  cover: StrapiMedia | null;
}

export type BrewMethodResponse = ApiResponse<BrewMethodInterface[]>;
export type BrewMethodSingleResponse = ApiResponse<BrewMethodInterface>;
