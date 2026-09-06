import { buttonRecipe } from "./button";
import { cardSlotRecipe } from "./card";
import { containerRecipe } from "./container";
import { drawerSlotRecipe } from "./drawer";
import { tagSlotRecipe } from "./tag";

export const recipes = {
  button: buttonRecipe,
  container: containerRecipe,
};

export const slotRecipes = {
  card: cardSlotRecipe,
  tag: tagSlotRecipe,
  drawer: drawerSlotRecipe,
};
