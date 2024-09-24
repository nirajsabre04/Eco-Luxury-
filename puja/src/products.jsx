// products.jsx
export const productsData = [
  {
    id: 1,
    name: "Sambrani Cups",
    flavors: [
      {
        name: "Rose",
        image: require("./assets/A1.png"), // Importing image
        description: "A delightful floral aroma of Rose for calming your senses.",
      },
      {
        name: "Guggle",
        image: require("../assets/guggle.jpg"),
        description: "Guggle flavor offers a rich and earthy fragrance for a meditative atmosphere.",
      },
      {
        name: "Sandalwood",
        image: require("../assets/sandalwood.jpg"),
        description: "A soothing and woody aroma of Sandalwood, perfect for relaxation.",
      },
      {
        name: "Loban",
        image: require("../assets/loban.jpg"),
        description: "Loban flavor creates a deep and mystical ambiance with its unique scent.",
      },
      {
        name: "Jasmine",
        image: require("../assets/jasmine.jpg"),
        description: "A sweet and exotic Jasmine fragrance for a refreshing environment.",
      },
    ],
  },
  {
    id: 2,
    name: "Cups Combo",
    flavors: [
      {
        name: "Cups Combo",
        image: require("../assets/combo.jpg"),
        description: "A combination of all Sambrani flavors in one pack for variety and value.",
      },
    ],
  },
  {
    id: 3,
    name: "Upla",
    flavors: [
      {
        name: "Upla",
        image: require("../assets/upla.jpg"),
        description: "Traditional Upla with a classic earthy aroma for spiritual rituals.",
      },
    ],
  },
  {
    id: 4,
    name: "Upla Combo",
    flavors: [
      {
        name: "Upla Combo",
        image: require("../assets/upla-combo.jpg"),
        description: "A combination pack of traditional Upla for ceremonial and daily use.",
      },
    ],
  },
];
