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
          require("./assets/ROSE/B.png"),
          require("./assets/ROSE/C.png"),
          require("./assets/ROSE/D.png"),
          require("./assets/ROSE/E.png"),
          require("./assets/ROSE/F.png"),
        ],
      },
      {
        name: "Guggle",
        image: require("./assets/GUGGAL/C.png"),
        description:
          "Guggle flavor offers a rich and earthy fragrance for a meditative atmosphere.",
        subImages: [
          // Sub-images for Guggle flavor
          require("./assets/GUGGAL/D.png"),
          require("./assets/GUGGAL/E.png"),
          require("./assets/GUGGAL/F.png"),
          require("./assets/GUGGAL/G.png"),
          require("./assets/GUGGAL/H.png"),
        ],
      },
      {
        name: "Sandalwood",
        image: require("./assets/SANDALWOOD/D.png"),
        description:
          "A soothing and woody aroma of Sandalwood, perfect for relaxation.",
        subImages: [
          // Sub-images for Sandalwood flavor
          require("./assets/SANDALWOOD/E.png"),
          require("./assets/SANDALWOOD/F.png"),
          require("./assets/SANDALWOOD/G.png"),
          require("./assets/SANDALWOOD/H.png"),
          require("./assets/SANDALWOOD/I.png"),
        ],
      },
      {
        name: "Loban",
        image: require("./assets/LOBAN/F.png"),
        description:
          "Loban flavor creates a deep and mystical ambiance with its unique scent.",
        subImages: [
          // Sub-images for Loban flavor
          require("./assets/LOBAN/G.png"),
          require("./assets/LOBAN/H.png"),
          require("./assets/LOBAN/I.png"),
          require("./assets/LOBAN/J.png"),
          require("./assets/LOBAN/K.png"),
        ],
      },
      {
        name: "Jasmine",
        image: require("./assets/MOGRA/B.png"),
        description:
          "A sweet and exotic Jasmine fragrance for a refreshing environment.",
        subImages: [
          // Sub-images for Jasmine flavor
          require("./assets/MOGRA/C.png"),
          require("./assets/MOGRA/D.png"),
          require("./assets/MOGRA/E.png"),
          require("./assets/MOGRA/F.png"),
          require("./assets/MOGRA/G.png"),
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
