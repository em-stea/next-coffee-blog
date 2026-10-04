import { DrinkCategoryInterface } from "@/features/drinks/types/drinks-categories";
import { ApiResponse, StrapiMedia } from "@/shared/types/strapi-response";

export type ServingSize = {
  name: string;
  minimumSize: number;
  maximumSize: number;
};

export const FOAM_TYPES = {
  MICROFOAM: "MicroFoam",
  DENSEFOAM: "DenseFoam",
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
  milk_ratio: {
    liquid_ratio: LiquidRatio;
    pour_milk_first: boolean;
  };
  water_ratio: {
    liquid_ratio: LiquidRatio;
    pour_water_first: boolean;
  };
  whiskey_ratio: {
    liquid_ratio: LiquidRatio;
  };
  syrup_ratio: {
    liquid_ratio: LiquidRatio;
  };
  whipped_cream_ratio: {
    liquid_ratio: LiquidRatio;
  };
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
