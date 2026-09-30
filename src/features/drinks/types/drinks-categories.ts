import { ApiResponse } from "@/shared/types/strapi-response";

export interface DrinkCategoryInterface {
  name: string;
  slug: string;
}

export type DrinkCategoryResponse = ApiResponse<DrinkCategoryInterface[]>;
