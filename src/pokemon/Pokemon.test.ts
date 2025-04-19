import Pokemon from "./Pokemon.js";

describe("Given the Negri pokémon", () => {
  describe("When it is instantiated", () => {
    const negri = new Pokemon(
      "Negri",
      6,
      "https://images.squarespace-cdn.com/content/v1/671237937161265de716c036/359c414e-00b5-4916-9fe9-0cbde091fdfd/negri-gat-sabi.JPG",
    );

    test("Then it should have 'Negri' as a name", () => {
      const expectedName = "Negri";

      expect(negri.name).toBe(expectedName);
    });

    test("Then it should have the Pokédex Position 6", () => {
      const expectedPokedexPosition = 6;

      expect(negri.pokedexPosition).toBe(expectedPokedexPosition);
    });

    test("Then it should have 'https://images.squarespace-cdn.com/content/v1/671237937161265de716c036/359c414e-00b5-4916-9fe9-0cbde091fdfd/negri-gat-sabi.JPG' as image URL", () => {
      const expectedImageUrl =
        "https://images.squarespace-cdn.com/content/v1/671237937161265de716c036/359c414e-00b5-4916-9fe9-0cbde091fdfd/negri-gat-sabi.JPG";

      expect(negri.imageUrl).toBe(expectedImageUrl);
    });

    test("Then it should have an ID", () => {
      expect(negri.id).not.toBe("");
    });

    test("Then it should not be captured", () => {
      expect(negri.isCaptured).toBe(false);
    });
  });
});
