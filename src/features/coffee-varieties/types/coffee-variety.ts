import { ApiResponse, StrapiEntry } from "@/shared/types/strapi-response";
import { OriginInterface } from "@/features/origins/types/origin";
import { ProcessMethodInterface } from "@/features/process-methods/types/process-method";
import { RoastLevelInterface } from "@/features/roast-levels/types/roast-level";

type RelationSummary = Pick<StrapiEntry, "id" | "documentId"> & {
  name: string;
  slug: string;
};

export interface CoffeeVarietyInterface extends StrapiEntry {
  name: string;
  slug: string;
  flavorProfile: string | null;
  origin:
    | (RelationSummary &
        Pick<
          OriginInterface,
          "region" | "altitudeRange" | "harvestSeason" | "description"
        >)
    | null;
  process_method:
    | (RelationSummary & Pick<ProcessMethodInterface, "description">)
    | null;
  roast_level:
    | (RelationSummary & Pick<RoastLevelInterface, "description">)
    | null;
}

export type CoffeeVarietyResponse = ApiResponse<CoffeeVarietyInterface[]>;
export type CoffeeVarietySingleResponse = ApiResponse<CoffeeVarietyInterface>;
