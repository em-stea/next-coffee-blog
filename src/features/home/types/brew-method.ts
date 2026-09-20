import { ApiResponse, StrapiMedia } from "@/shared/types/strapi-response";

export type MethodType =
  | "Immersion Method"
  | "Manual Pour Over"
  | "Cold Extraction"
  | "Classic Extraction";

export type ExtractionType =
  | "Drip Filter"
  | "Classic Concentrate"
  | "Full Immersion"
  | "Cold Percolation"
  | "Gravity Percolation"
  | "Pressure Immersion";

export interface BrewMethodInterface {
  name: string;
  slug: string;
  description: string;
  cover: StrapiMedia;
  video: {
    url: string;
  };
  method_type: MethodType;
  extraction_type: ExtractionType;
  sortOrder: number;
}

export type BrewMethodResponse = ApiResponse<BrewMethodInterface[]>;
