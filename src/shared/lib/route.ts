export const ROUTES = {
  home: "/",
  accessories: "/accesories",
  brewMethods: "/brew-methods",
  coffeeDrinks: "/drinks",
  drinkDetail: (slug: string) => `/drinks/${slug}`,
  coffeeVarieties: "/varieties",
  grinders: "/grinders",
} as const;
