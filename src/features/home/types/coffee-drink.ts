import { DrinkCategoryInterface } from "@/features/drinks/types/drinks-categories";
import { MilkRatioInterface } from "@/features/milk-ratios/types/milk-ratio";
import { ApiResponse, StrapiMedia } from "@/shared/types/strapi-response";

export type ServingSize = {
  name: string;
  minimumSize: number;
  maximumSize: number;
};

export const FOAM_TYPES = {
  MICROFOAM: "Microfoam",
  DENSE_FOAM: "Dense Foam",
  NO_FOAM: "No Foam",
} as const;

export type FoamType = (typeof FOAM_TYPES)[keyof typeof FOAM_TYPES] | null;

export type EspressoShots = {
  name: string;
  minimumVolume: number;
  maximumVolume: number;
};

export type LiquidRatio = {
  name: string;
};

export type DrinkRecipe = {
  name: string;
  serving_size: ServingSize;
  espresso_shot: EspressoShots | null;
  foam_type: FoamType;
  milk_ratio: LiquidRatio;
  water_ratio: LiquidRatio;
  whiskey_ratio: LiquidRatio;
  syrup_ratio: LiquidRatio;
};

export interface CoffeeDrinkInterface {
  name: string;
  slug: string;
  description: string;
  drinks_category: DrinkCategoryInterface;
  instructions: string;
  cover: StrapiMedia;
  drink_recipe: DrinkRecipe;
  formattedServingSize: string;
  formattedEspressoShot: string;
  sortOrder: number;
}

export type CoffeeDrinkResponse = ApiResponse<CoffeeDrinkInterface[]>;
export type CoffeeDrinkSingleResponse = ApiResponse<CoffeeDrinkInterface>;
