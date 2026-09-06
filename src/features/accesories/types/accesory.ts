import {
  ApiResponse,
  StrapiEntry,
  StrapiMedia,
} from "@/shared/types/strapi-response";

export interface AccesoryInterface extends StrapiEntry {
  name: string;
  slug: string;
  cover: StrapiMedia | null;
  description: string | null;
  instructionsForUse: string | null;
}

export type AccesoryResponse = ApiResponse<AccesoryInterface[]>;
export type AccesorySingleResponse = ApiResponse<AccesoryInterface>;
