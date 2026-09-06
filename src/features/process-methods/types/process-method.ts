import { ApiResponse, StrapiEntry } from "@/shared/types/strapi-response";

export interface ProcessMethodInterface extends StrapiEntry {
  name: string;
  slug: string;
  description: string | null;
  sortOrder: number | null;
}

export type ProcessMethodResponse = ApiResponse<ProcessMethodInterface[]>;
export type ProcessMethodSingleResponse = ApiResponse<ProcessMethodInterface>;
