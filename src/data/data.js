// Test data file used to simulate backend structure.

import { Cocktail, Roll, Salad, Taco } from "../assets";

export const shopData = [
  {
    id: 1,
    title: "Mojito",
    subtitle: "Cool off with this refreshing cocktail!",
    price: 10,
    image: Cocktail,
    backgroundColor: "#bfb0de",
  },
  {
    id: 2,
    title: "Salad",
    subtitle: "Salads are delicious yall are just cowards :(",
    price: 8,
    image: Salad,
    backgroundColor: "#fac68e",
  },
  {
    id: 3,
    title: "Swiss Roll",
    subtitle: "Curb your sweet tooth with this delightful Swiss Roll!",
    price: 12,
    image: Roll,
    backgroundColor: "#c1d9c3",
  },
  {
    id: 4,
    title: "Taco",
    subtitle:
      "This image already has you salivating. Might as well order one! Or two. Or five.",
    price: 3,
    image: Taco,
    backgroundColor: "#f09090",
  },
];
