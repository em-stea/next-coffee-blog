import { httpSecure } from "@/shared/http";
import { CoffeeDrinkResponse } from "../../features/home/types/coffee-drink";

export const getCoffeeDrinks = async (query?: string) => {
  const response = await httpSecure.get<CoffeeDrinkResponse>(
    `coffee-drinks?${query}`,
  );

  const formattedDrinks = response.data.map((drink) => {
    const { drink_recipe } = drink;
    const { serving_size, espresso_shot } = drink_recipe;

    const formattedServingSize = `${serving_size.name} (${serving_size.minimumSize}ml - ${serving_size.maximumSize}ml)`;
    const formattedEspressoShot = espresso_shot
      ? `${espresso_shot.name} (${espresso_shot.minimumVolume}ml - ${espresso_shot.maximumVolume}ml)`
      : "No Espresso";

    return {
      ...drink,
      formattedServingSize,
      formattedEspressoShot,
    };
  });

  return formattedDrinks;
};
