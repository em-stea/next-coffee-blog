import { httpSecure } from "@/shared/http";
import { getCoffeeDrinkCategories } from "./get-drinks-categories";

jest.mock("@/shared/http");

describe("getCoffeeDrinkCategories", () => {
  it("devuelve las categorías de bebidas", async () => {
    const categories = {
      data: [
        { id: 1, name: "Espresso" },
        { id: 2, name: "Latte" },
      ],
    };

    jest.mocked(httpSecure.get).mockResolvedValue(categories);

    const result = await getCoffeeDrinkCategories("page=1");

    expect(result).toEqual(categories.data);
  });
});
