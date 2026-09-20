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

type Difficulty = "Low" | "Medium" | "High";

type CoffeeRatio = {
  ratio: string;
  detail: string;
};

type GrindSize = {
  name: string;
  slug: string;
  description: string;
};

export interface BrewMethodInterface {
  name: string;
  slug: string;
  description: string;
  difficulty: Difficulty;
  cover: StrapiMedia;
  video: {
    url: string;
  };
  method_type: MethodType;
  extraction_type: ExtractionType;
  coffee_ratio: CoffeeRatio;
  grind_size: GrindSize;
  brew_time: string;
  time_note: string;
  sortOrder: number;
}

export type BrewMethodResponse = ApiResponse<BrewMethodInterface[]>;
