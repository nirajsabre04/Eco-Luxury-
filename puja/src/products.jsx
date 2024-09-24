// products.jsx
export const productsData = [
  {
    id: 1,
    name: "Sambrani Cups",
    price: 200, // Price for Sambrani Cups
    flavors: [
      {
        name: "Rose",
        image: require("./assets/ROSE/A.png"), // Main image
        description:
          "A delightful floral aroma of Rose for calming your senses.",
        subImages: [
          // Sub-images for Rose flavor
          require("./assets/ROSE/A1.png"),
          require("./assets/ROSE/A2.png"),
          require("./assets/ROSE/A3.png"),
          require("./assets/ROSE/A4.png"),
          require("./assets/ROSE/A5.png"),
        ],
      },
      {
        name: "Guggle",
        image: require("./assets/GUGGAL/C.png"),
        description:
          "Guggle flavor offers a rich and earthy fragrance for a meditative atmosphere.",
        subImages: [
          // Sub-images for Guggle flavor
          require("./assets/GUGGAL/C1.png"),
          require("./assets/GUGGAL/C2.png"),
          require("./assets/GUGGAL/C3.png"),
          require("./assets/GUGGAL/C4.png"),
          require("./assets/GUGGAL/C5.png"),
        ],
      },
      {
        name: "Sandalwood",
        image: require("./assets/SANDALWOOD/D.png"),
        description:
          "A soothing and woody aroma of Sandalwood, perfect for relaxation.",
        subImages: [
          // Sub-images for Sandalwood flavor
          require("./assets/SANDALWOOD/D1.png"),
          require("./assets/SANDALWOOD/D2.png"),
          require("./assets/SANDALWOOD/D3.png"),
          require("./assets/SANDALWOOD/D4.png"),
          require("./assets/SANDALWOOD/D5.png"),
        ],
      },
      {
        name: "Loban",
        image: require("./assets/LOBAN/F.png"),
        description:
          "Loban flavor creates a deep and mystical ambiance with its unique scent.",
        subImages: [
          // Sub-images for Loban flavor
          require("./assets/LOBAN/F1.png"),
          require("./assets/LOBAN/F2.png"),
          require("./assets/LOBAN/F3.png"),
          require("./assets/LOBAN/F4.png"),
          require("./assets/LOBAN/F5.png"),
        ],
      },
      {
        name: "Jasmine",
        image: require("./assets/MOGRA/B.png"),
        description:
          "A sweet and exotic Jasmine fragrance for a refreshing environment.",
        subImages: [
          // Sub-images for Jasmine flavor
          require("./assets/MOGRA/B1.png"),
          require("./assets/MOGRA/B2.png"),
          require("./assets/MOGRA/B3.png"),
          require("./assets/MOGRA/B4.png"),
          require("./assets/MOGRA/B5.png"),
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Cups Combo",
    price: 800, // Price for Cups Combo
    flavors: [
      {
        name: "Cups Combo",
        image: require("./assets/MIX/E.png"),
        description:
          "A combination of all Sambrani flavors in one pack for variety and value.",
      },
      // Sub-images for Cups Combo (if needed)
      {
        name: "Rose",
        image: require("./assets/ROSE/A.png"),
        description:
          "A delightful floral aroma of Rose for calming your senses.",
      },
      {
        name: "Guggle",
        image: require("./assets/GUGGAL/C.png"),
        description:
          "Guggle flavor offers a rich and earthy fragrance for a meditative atmosphere.",
      },
      {
        name: "Sandalwood",
        image: require("./assets/SANDALWOOD/D.png"),
        description:
          "A soothing and woody aroma of Sandalwood, perfect for relaxation.",
      },
      {
        name: "Loban",
        image: require("./assets/LOBAN/F.png"),
        description:
          "Loban flavor creates a deep and mystical ambiance with its unique scent.",
      },
      {
        name: "Jasmine",
        image: require("./assets/MOGRA/B.png"),
        description:
          "A sweet and exotic Jasmine fragrance for a refreshing environment.",
      },
    ],
  },
  {
    id: 3,
    name: "Upla",
    price: 150, // Price for Upla
    flavors: [
      {
        name: "Upla",
        image: require("./assets/UPLA/G.png"),
        description:
          "Traditional Upla with a classic earthy aroma for spiritual rituals.",
      },
    ],
  },
  {
    id: 4,
    name: "Upla Combo",
    price: 500, // Price for Upla Combo
    flavors: [
      {
        name: "Upla Combo",
        image: require("./assets/UPLA-MIX/H.png"),
        description:
          "A combination pack of traditional Upla for ceremonial and daily use.",
      },
    ],
  },
];
