import {
  ApiResponse,
  StrapiEntry,
  StrapiMedia,
} from "@/shared/types/strapi-response";

export type GrinderType = "Manual" | "Electric";
export type BurrType = "Flat Burrs" | "Conical Burrs" | "Blade";

export interface GrinderInterface extends StrapiEntry {
  name: string;
  slug: string;
  cover: StrapiMedia | null;
  type: GrinderType | null;
  burrType: BurrType | null;
  description: string | null;
}

export type GrinderResponse = ApiResponse<GrinderInterface[]>;
export type GrinderSingleResponse = ApiResponse<GrinderInterface>;
