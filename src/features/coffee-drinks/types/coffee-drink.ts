import {
  ApiResponse,
  StrapiEntry,
  StrapiMedia,
} from "@/shared/types/strapi-response";
import { MilkRatioInterface } from "@/features/milk-ratios/types/milk-ratio";

export type ServingSize =
  | "Small (30 - 60 ml)"
  | "Short (120 - 150 ml)"
  | "Medium (180 - 240 ml)"
  | "Large (300 - 350 ml)"
  | "Extra Large (400+ ml)";

export type FoamType = "Microfoam" | "Dense Foam" | "No Foam";

export type EspressoShots =
  | "Single (1 shot / ~18-30ml)"
  | "Double (2 shots / ~36-60ml)"
  | "Triple (3 shots)"
  | "Quad (4 shots)"
  | "Ristretto (Short, concentrated extraction)";

export interface CoffeeDrinkInterface extends StrapiEntry {
  name: string;
  slug: string;
  description: string;
  servingSize: ServingSize;
  instructions: string;
  cover: StrapiMedia;
  foamType: FoamType;
  espressoShots: EspressoShots;
  milk_ratio: MilkRatioInterface;
}

export type CoffeeDrinkResponse = ApiResponse<CoffeeDrinkInterface[]>;
export type CoffeeDrinkSingleResponse = ApiResponse<CoffeeDrinkInterface>;
