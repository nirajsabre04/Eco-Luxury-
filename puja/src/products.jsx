export const productsData = [
  {
    id: 1,
    name: "Sambrani Cups",
    originalPrice:'349',
    price: '199', // Price for Sambrani Cups
    quantityAvailable: 50, // Stock availability
    rating: 4.8, // Product rating
    flavors: [
      {
        subId: 101,
        name: "Rose",
        image: require("./assets/ROSE/A.png"), // Main image
        description:
          "Rose Sambrani Cups offer a delightful floral aroma for calming your senses. These cups are perfect for meditation, prayer, and creating a soothing atmosphere. The refreshing fragrance helps reduce stress, anxiety, and promotes a sense of tranquility. Ideal for spiritual practices, yoga sessions, or simply freshening up your home with a natural fragrance.",
        uses: [
          "Use during meditation, prayers, or for general relaxation.",
          "Ideal for creating a peaceful and serene environment.",
          "Perfect for freshening up rooms with a natural floral fragrance.",
        ],
        subImages: [
          require("./assets/ROSE/A1.png"),
          require("./assets/ROSE/A2.png"),
          require("./assets/ROSE/A3.png"),
          require("./assets/ROSE/A4.png"),
          require("./assets/ROSE/A5.png"),
        ],
      },
      {
        subId: 102,
        name: "Guggal",
        image: require("./assets/GUGGAL/C.png"),
        description:
          "Guggal Sambrani Cups bring a rich and earthy fragrance, offering a deep meditative experience. The unique aroma of Guggal is known to purify the environment, uplift your mood, and create a spiritual atmosphere. Use it to cleanse your home or sacred spaces, removing negative energies and promoting positivity.",
        uses: [
          "Ideal for spiritual cleansing and purifying spaces.",
          "Great for meditation and rituals.",
          "Helps in creating a spiritually enriching atmosphere.",
        ],
        subImages: [
          require("./assets/GUGGAL/C1.png"),
          require("./assets/GUGGAL/C2.png"),
          require("./assets/GUGGAL/C3.png"),
          require("./assets/GUGGAL/C4.png"),
          require("./assets/GUGGAL/C5.png"),
        ],
      },
      {
        subId: 103,
        name: "Sandalwood",
        image: require("./assets/SANDALWOOD/D.png"),
        description:
          "Sandalwood Sambrani Cups provide a soothing and woody aroma, perfect for relaxation and unwinding after a long day. Sandalwood is traditionally known for its grounding and calming properties, helping to center the mind and reduce stress. This fragrance is perfect for creating a peaceful atmosphere in your living spaces.",
        uses: [
          "Best for relaxing and grounding meditation.",
          "Perfect for creating a calm environment for yoga or leisure.",
          "Ideal for unwinding after a stressful day.",
        ],
        subImages: [
          require("./assets/SANDALWOOD/D1.png"),
          require("./assets/SANDALWOOD/D2.png"),
          require("./assets/SANDALWOOD/D3.png"),
          require("./assets/SANDALWOOD/D4.png"),
          require("./assets/SANDALWOOD/D5.png"),
        ],
      },
      {
        subId: 104,
        name: "Loban",
        image: require("./assets/LOBAN/F.png"),
        description:
          "Loban Sambrani Cups exude a deep, mystical scent, perfect for creating an otherworldly ambiance. The aroma is strong, soothing, and aids in deep meditation practices. Loban is commonly used in spiritual and religious rituals, known for cleansing spaces and invoking positivity.",
        uses: [
          "Best for religious ceremonies and rituals.",
          "Ideal for space cleansing and promoting positive energy.",
          "Helps create a calm, focused environment for meditation.",
        ],
        subImages: [
          require("./assets/LOBAN/F1.png"),
          require("./assets/LOBAN/F2.png"),
          require("./assets/LOBAN/F3.png"),
          require("./assets/LOBAN/F4.png"),
          require("./assets/LOBAN/F5.png"),
        ],
      },
      {
        subId: 105,
        name: "Jasmine",
        image: require("./assets/MOGRA/B.png"),
        description:
          "Jasmine Sambrani Cups feature a sweet and exotic fragrance, perfect for uplifting the mood and refreshing the environment. The aroma of jasmine is often associated with romance, joy, and emotional wellness. Light this Sambrani to add a hint of luxury and elegance to your home.",
        uses: [
          "Use to refresh and uplift the atmosphere.",
          "Perfect for romantic settings or self-care rituals.",
          "Helps promote emotional well-being and relaxation.",
        ],
        subImages: [
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
    originalPrice:1049,
    price: 800, // Price for Cups Combo
    quantityAvailable: 20, // Stock availability
    rating: 4.9, // Product rating
    flavors: [
      {
        name: "Cups Combo",
        image: require("./assets/MIX/E.png"),
        description:
          "The Cups Combo includes a variety of Sambrani flavors in one pack, offering the best of all worlds. Each flavor provides its unique aroma, allowing you to choose the scent that fits your mood or occasion. Ideal for gift-giving, or for those who enjoy experimenting with different fragrances.",
        uses: [
          "Perfect for gift-giving on special occasions.",
          "Ideal for those who enjoy a variety of aromas.",
          "Best for meditation, ceremonies, or daily use.",
        ],
        subImages: [
          require("./assets/MIX/E1.png"),
          require("./assets/MIX/E2.png"),
          require("./assets/MIX/E3.png"),
          require("./assets/MIX/E4.png"),
          require("./assets/MIX/E5.png"),
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Upla",
    originalPrice:249,
    price: 150, // Price for Upla
    quantityAvailable: 100, // Stock availability
    rating: 4.7, // Product rating
    flavors: [
      {
        name: "Upla",
        image: require("./assets/UPLA/G.png"),
        description:
          "Traditional Upla Sambrani Cups provide an earthy, natural aroma, perfect for spiritual and religious rituals. The calming scent is ideal for purifying the environment and setting a tranquil tone for prayers and meditation.",
        uses: [
          "Best for daily spiritual rituals and prayers.",
          "Use to purify spaces and promote tranquility.",
          "Ideal for creating a meditative and calming environment.",
        ],
        subImages: [
          require("./assets/UPLA/G1.png"),
          require("./assets/UPLA/G2.png"),
          require("./assets/UPLA/G3.png"),
          require("./assets/UPLA/G4.png"),
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Upla Combo",
    originalPrice:649,
    price: 500, // Price for Upla Combo
    quantityAvailable: 100, // Stock availability
    rating: 4.8, // Product rating
    flavors: [
      {
        name: "Upla Combo",
        image: require("./assets/UPLA-MIX/H.png"),
        description:
          "Traditional Upla Sambrani Cups provide an earthy, natural aroma, perfect for spiritual and religious rituals. The calming scent is ideal for purifying the environment and setting a tranquil tone for prayers and meditation.",
        uses: [
          "Best for daily spiritual rituals and prayers.",
          "Use to purify spaces and promote tranquility.",
          "Ideal for creating a meditative and calming environment.",
        ],
        subImages: [
          require("./assets/UPLA-MIX/H.png"),
          require("./assets/UPLA-MIX/H1.png"),
          require("./assets/UPLA/G3.png"),
          require("./assets/UPLA/G4.png"),
        ],
      },
    ],
  },
];
