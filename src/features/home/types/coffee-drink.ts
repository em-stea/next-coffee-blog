import { DrinkCategoryInterface } from "@/features/drinks/types/drinks-categories";
import { MilkRatioInterface } from "@/features/milk-ratios/types/milk-ratio";
import { ApiResponse, StrapiMedia } from "@/shared/types/strapi-response";

export type ServingSize = {
  name: string;
  minimumSize: number;
  maximumSize: number;
};

export type FoamType = "Microfoam" | "Dense Foam" | "No Foam";

export type EspressoShots = {
  name: string;
  minimumVolume: number;
  maximumVolume: number;
};
export interface CoffeeDrinkInterface {
  name: string;
  slug: string;
  description: string;
  serving_size: ServingSize;
  espresso_shot: EspressoShots;
  instructions: string;
  cover: StrapiMedia;
  foamType: FoamType;
  milk_ratio: MilkRatioInterface;
  sortOrder: number;
  drinks_category: DrinkCategoryInterface;
}

export type CoffeeDrinkResponse = ApiResponse<CoffeeDrinkInterface[]>;
export type CoffeeDrinkSingleResponse = ApiResponse<CoffeeDrinkInterface>;
