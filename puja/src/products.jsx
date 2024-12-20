export const productsData = [
  {
    id: 1,
    name: "Organic Cow dung Sambrani Cups ",
    originalPrice: "349",
    price: "199", // Price for Sambrani Cups
    quantityAvailable: 50, // Stock availability
    rating: 4.8, // Product rating
    flavors: [
      {
        subId: 101,
        name: "Rose",
        image: require("./assets/ROSE/A.png"), // Main image
        specification: ["16 Cups", "1 tray - 16 cups in 1 Tray"],
        description: [
          "100% Organic: Made from natural and high-quality ingredients for a chemical-free experience.",
          "Non-Toxic: Safe for you and the environment, without harmful chemicals or synthetic additives.",
          "Air Purifying: Releases purifying properties that help eliminate airborne impurities and refresh your surroundings.",
          "Natural Rose Flavor & Aroma: Infuses your space with a calming and pure rose fragrance, derived from natural ingredients.",
          "Long-Lasting Burn Time: Provides a consistent burn time of up to 30 minutes.",
          "Perfect for Daily and Special Rituals: Suitable for daily Aarti rituals, Havans, and other auspicious ceremonies.",
          "Eco-Friendly Packaging: Comes in biodegradable packaging, promoting environmental sustainability.",
          "Mood Enhancement: Its soothing rose aroma helps reduce stress and elevate mood, creating a serene atmosphere.",
          "Handcrafted with Care: Each sambrani cup is meticulously crafted to ensure premium quality and authenticity.",
          "Safe for Indoor Use: Designed to provide a clean-burning experience, safe for use inside homes, temples, or gatherings.",
        ],
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
          require("./assets/ROSE/rose 4.jpg"),
          require("./assets/ROSE/rose 2.jpg"),
        ],
      },
      {
        subId: 102,
        name: "Guggal",
        image: require("./assets/GUGGAL/C.png"),
        specification: ["16 Cups", "1 tray - 16 cups in 1 Tray"],
        description: [
          "100% Organic: Created with high-quality, natural ingredients for a pure and eco-friendly experience.",
          "Non-Toxic: Free from harmful chemicals, ensuring safe use for you, your loved ones, and the environment.",
          "Air Purifying: Helps to cleanse and purify the air, creating a more positive and fresh atmosphere.",
          "Natural Guggal Aroma: Fills your space with the deep, earthy fragrance of guggal (resin), known for its sacred and purifying properties.",
          "Long Burn Time: Provides a consistent burn lasting up to 30 minutes for extended aromatic bliss.",
          "Perfect for Rituals: Suitable for daily Aarti, Havans, meditation, and other auspicious ceremonies, adding a traditional touch.",
          "Eco-Friendly Packaging: Comes in biodegradable and environmentally-conscious packaging materials.",
          "Stress Relief and Calmness: The earthy, grounding aroma of guggal is known to reduce stress, promote relaxation, and bring balance.",
          "Handcrafted Excellence: Meticulously crafted for premium quality, authenticity, and superior performance.",
          "Indoor-Friendly: Designed for clean and consistent burning, making it safe for use in homes, temples, and other sacred gatherings.",
        ],
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
          require("./assets/GUGGAL/guggal 4.jpg"),
          require("./assets/GUGGAL/guggal 1.jpg"),
          require("./assets/GUGGAL/guggal 2.jpg"),
          
        ],
      },
      {
        subId: 103,
        name: "Sandalwood",
        image: require("./assets/SANDALWOOD/D.png"),
        specification: ["16 Cups", "1 tray - 16 cups in 1 Tray"],
        description: [
          "100% Organic: Made from natural and premium-quality ingredients to offer a pure and chemical-free experience.",
          "Non-Toxic: Free from harmful chemicals, providing a safe option for you and the environment.",
          "Air Purifying: Releases purifying properties that cleanse the air and create a refreshing, serene environment.",
          "Natural Sandalwood Flavour & Aroma: Infuses your space with a calming and authentic sandalwood fragrance, derived from natural sources.",
          "Long-Lasting Burn Time: Provides a consistent burn of up to 30 minutes.",
          "Ideal for Daily and Special Rituals: Perfect for enhancing your daily Aarti rituals, Havans, meditation, and special ceremonies.",
          "Eco-Friendly Packaging: Packaged in biodegradable, environmentally-friendly materials.",
          "Promotes Relaxation: The soothing aroma of sandalwood aids in reducing stress, enhancing meditation, and bringing calmness to any setting.",
          "Handcrafted Quality: Each sambrani cup is carefully crafted to ensure top-notch quality, authenticity, and effectiveness.",
          "Safe for Indoor Use: Offers a clean and consistent burn, making it suitable for use within homes, temples, and sacred gatherings.",
        ],

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
          require("./assets/SANDALWOOD/sandalwood 4.jpg"),
          require("./assets/SANDALWOOD/sandalwood 1.jpg"),
          require("./assets/SANDALWOOD/sandalwood 2.jpg"),
        ],
      },
      {
        subId: 104,
        name: "Loban",
        image: require("./assets/LOBAN/F.png"),
        specification: ["16 Cups", "1 tray - 16 cups in 1 Tray"],
        description: [
          "100% Organic: Made from natural, high-quality ingredients to offer a pure and chemical-free aromatic experience.",
          "Non-Toxic: Free from any harmful chemicals, making it a safe choice for you, your family, and the environment.",
          "Air Purifying: Known for its cleansing properties, it helps purify the air and create a refreshing, positive atmosphere.",
          "Natural Loban Aroma: Releases the deep, rich, and soothing fragrance of loban (benzoin resin), traditionally used for its calming effects.",
          "Extended Burn Time: Provides a steady and consistent burn lasting up to 30 minutes.",
          "Ideal for Rituals: Perfect for daily Aarti rituals, Havans, prayer meetings, meditation sessions, and other special occasions.",
          "Eco-Friendly Packaging: Packaged using biodegradable materials, contributing to a healthier planet.",
          "Calming and Grounding: The rich loban aroma is known to reduce stress, promote mental clarity, and bring a sense of calm and grounding.",
          "Handcrafted Quality: Carefully crafted to ensure premium quality, purity, and exceptional fragrance.",
          "Safe for Indoor Use: Designed for a clean-burning experience, making it ideal for use in homes, temples, or sacred gatherings.",
        ],

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
          require("./assets/LOBAN/loban 4.jpg"),
          require("./assets/LOBAN/loban 1.jpg"),
          require("./assets/LOBAN/loban 2.jpg"),
        ],
      },
      {
        subId: 105,
        name: "Jasmine",
        image: require("./assets/MOGRA/B.png"),
        specification: ["16 Cups", "1 tray - 16 cups in 1 Tray"],
        description: [
          "100% Organic: Made using natural, premium-quality ingredients to ensure a chemical-free experience.",
          "Non-Toxic: Crafted without harmful chemicals, offering a safe option for you, your family, and the environment.",
          "Air Purifying: Effectively helps cleanse and purify the air, leaving a fresh and rejuvenated ambiance.",
          "Natural Mogra Fragrance: Releases the delightful, calming aroma of mogra (jasmine), derived from authentic and natural sources.",
          "Extended Burn Time: Provides a steady and long-lasting burn of up to 30 minutes.",
          "Versatile Ritual Use: Ideal for daily Aarti rituals, Havans, meditation sessions, or any other auspicious ceremonies and gatherings.",
          "Eco-Friendly Packaging: Comes in environmentally-conscious, biodegradable packaging.",
          "Soothing and Uplifting: The sweet and calming mogra scent helps relieve stress, uplift mood, and create a serene atmosphere.",
          "Artisan-Crafted: Handcrafted with meticulous care to ensure the highest quality and authenticity.",
          "Indoor Safe: Designed for a clean-burning experience, perfect for indoor use in homes, temples, and sacred spaces.",
        ],

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
          require("./assets/MOGRA/mogra 4.jpg"),
          require("./assets/MOGRA/mogra 1.jpg"),
          require("./assets/MOGRA/mogra 2.jpg"),
        ],
      },
      {
        subId: 106,
        name: "Mix Flavour",
        image: require("./assets/MIX/E.png"),
        specification: [
          "16 Cups",
          "1 tray - 16 cups in 1 Tray",
          "Include All flavours(4 cups of each flavour)",
        ],
        description: [
          "100% Organic: Made from high-quality, natural ingredients to ensure a pure, chemical-free aromatic experience.",
          "Non-Toxic: Safe and free from any harmful chemicals, making it ideal for you, your family, and the environment.",
          "Air Purifying: Each fragrance helps cleanse and purify the air, leaving your space refreshed and renewed.",
          "Variety of Natural Aromas: Enjoy four distinct, natural fragrances—rose for its uplifting scent, mogra for its soothing aroma, sandalwood for calming vibes, and guggal for earthy grounding effects.",
          "Extended Burn Time: Each cup provides a consistent burn time of up to 30 minutes, ensuring lasting fragrance and impact.",
          "Ideal for Rituals and Daily Use: Perfect for enhancing your daily Aarti rituals, meditation, Havans, and special ceremonies.",
          "Eco-Friendly Packaging: Comes in biodegradable packaging, emphasizing environmental sustainability.",
          "Mood-Enhancing Properties: Each scent offers unique benefits—rose uplifts the spirit, mogra promotes relaxation, sandalwood calms the mind, and guggal grounds and balances.",
          "Handcrafted Quality: Every cup is meticulously crafted to provide premium quality and authenticity, ensuring a superior aromatic experience.",
          "Safe for Indoor Use: Designed for a clean and consistent burn, making them ideal for homes, temples, and sacred spaces.",
          "Versatile Combo Pack: Offers a range of scents to cater to different moods, occasions, and rituals, providing an all-in-one aromatic solution.",
        ],
        uses: [
          "Use to refresh and uplift the atmosphere.",
          "Perfect for romantic settings or self-care rituals.",
          "Helps promote emotional well-being and relaxation.",
        ],
        subImages: [
          require("./assets/MIX/E1.png"),
          require("./assets/MIX/E2.png"),
          require("./assets/MIX/E3.png"),
          require("./assets/MIX/E4.png"),
          require("./assets/MIX/mix 4.jpg"),
          require("./assets/MIX/mix 1.jpg"),
          require("./assets/MIX/mix 2.jpg"),
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Organic Cow Dung Sambrani Cups",
    originalPrice: 1049,
    price: 800, // Price for Cups Combo
    quantityAvailable: 20, // Stock availability
    rating: 4.9, // Product rating
    flavors: [
      {
        subId: 107,
        name: "Cups Combo",
        image: require("./assets/combo/C6.png"),
        description: [
          "100% Organic: Each cup is made from high-quality, natural ingredients to provide a pure, chemical-free experience.",
          "Non-Toxic: Free from harmful chemicals, making it safe for you, your family, and the environment.",
          "Air Purifying: Releases purifying properties that help cleanse the air, leaving your space refreshed and renewed.",
          "Variety of Natural Aromas: Features a combination of fragrances such as rose, sandalwood, mogra, guggal, and loban, offering a diverse aromatic experience.",
          "Extended Burn Time: Each cup burns consistently for up to 30 minutes, providing a lasting fragrance.",
          "Perfect for All Rituals: Suitable for daily Aarti, meditation, Havans, special occasions, and spiritual gatherings.",
          "Eco-Friendly Packaging: Comes in biodegradable and sustainable packaging, supporting a greener planet.",
          "Mood Enhancement: Each scent brings unique benefits—rose for uplifting the spirit, sandalwood for calmness, mogra for relaxation, guggal for grounding, and loban for mental clarity.",
          "Handcrafted Excellence: Every sambrani cup in the combo is crafted with meticulous care to ensure top-tier quality and authenticity.",
          "Indoor-Friendly: Designed for a clean-burning experience that is perfect for indoor spaces such as homes, temples, and sacred gatherings.",
          "Cost-Effective Value: Enjoy multiple fragrances in one pack, offering versatility and value for your spiritual and aromatic needs.",
        ],
        specification: ["16 Cups", "1 tray - 16 cups in 1 Tray"],
        uses: [
          "Perfect for gift-giving on special occasions.",
          "Ideal for those who enjoy a variety of aromas.",
          "Best for meditation, ceremonies, or daily use.",
        ],
        subImages: [
          require("./assets/combo/C.png"),
          require("./assets/combo/C2.png"),
          require("./assets/combo/C3.png"),
          require("./assets/combo/C4.png"),
          require("./assets/combo/C5.png"),
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Upla Combo",
    originalPrice: 649,
    price: 477, // Price for Upla Combo
    quantityAvailable: 100, // Stock availability
    rating: 4.8, // Product rating
    flavors: [
      {
        subId: 108,
        name: "3+1 Pack",
        image: require("./assets/UPLA-MIX/H.png"),
        description: [
          "100% Organic: Made from pure, natural cow dung, ensuring a traditional, chemical-free product that’s safe and eco-friendly.",
          "Non-Toxic: Free from harmful chemicals, making it safe for use in homes, temples, and outdoor spaces, preserving your health and the environment.",
          "Eco-Friendly and Sustainable: Biodegradable and environmentally conscious, promoting sustainability with every use.",
          "Air Purifying: Releases natural purifying properties when burned, helping cleanse the air and refresh your surroundings.",
          "Multipurpose Use: Perfect for daily rituals, Havans, Yagnas, cooking on traditional chulhas, and other spiritual ceremonies.",
          "Traditional Aroma: Emits a natural, earthy aroma that enhances the spiritual ambiance, adding authenticity to your rituals.",
          "Long-Lasting Burn: Each upla burns steadily for a long time, making it ideal for extended rituals and ceremonies.",
          "Buy 3 Get 1 Free: Enjoy more value for your money with this special offer. Buy 3 packs of organic upla and get 1 additional pack absolutely free.",
          "Handcrafted Quality: Each upla is carefully handcrafted to maintain authenticity, preserving the traditional methods and values.",
          "High Calorific Value: Burns efficiently, offering excellent energy for cooking, religious rituals, and outdoor fires.",
          "Indoor and Outdoor Friendly: Safe for use indoors for rituals, and can also be used outdoors for fires and traditional cooking methods.",
          "Cultural and Spiritual Significance: Rooted in Indian traditions, EcoLuxury's organic upla combo adds a meaningful touch to spiritual and cultural practices.",
        ],
        specification: ["10 Pieces in One pack", "total 4 packs (3+1 free)"],
        uses: [
          "Best for daily spiritual rituals and prayers.",
          "Use to purify spaces and promote tranquility.",
          "Ideal for creating a meditative and calming environment.",
        ],
        subImages: [
          require("./assets/UPLA-MIX/H1.png"),
          require("./assets/UPLA-MIX/H.png"),
          require("./assets/UPLA/G3.png"),
          require("./assets/UPLA/G4.png"),
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Cow Dung Cake",
    originalPrice: 249,
    price: 159, // Price for Upla
    quantityAvailable: 100, // Stock availability
    rating: 4.7, // Product rating
    flavors: [
      {
        subId: 109,
        name: "Upla",
        image: require("./assets/UPLA/G.png"),
        description: [
          "100% Organic: Made from pure, natural cow dung to offer a traditional, chemical-free product.",
          "Non-Toxic: Free from any harmful chemicals, making it safe for use in homes, temples, and outdoor spaces.",
          "Eco-Friendly: Biodegradable and environmentally conscious, supporting a greener, more sustainable lifestyle.",
          "Air Purifying Properties: Releases natural purifying elements when burned, contributing to a cleaner, fresher atmosphere.",
          "Multipurpose Use: Ideal for daily rituals, Havans, Yagnas, cooking on traditional chulhas, and other auspicious ceremonies.",
          "Traditional Aroma: Emits a pleasant, natural aroma that adds a touch of tradition and positivity to any ritual.",
          "Long-Lasting Burn: Designed to provide a steady and long-lasting burn for maximum effectiveness during rituals.",
          "Handcrafted: Each upla is crafted with care and precision, preserving authenticity and traditional values.",
          "High Calorific Value: Offers excellent burning efficiency, making it suitable for various uses, including religious and cultural purposes.",
          "Indoor and Outdoor Use: Safe for use in indoor settings, such as homes and temples, as well as for outdoor fires and rituals.",
          "Cultural Significance: Deeply rooted in Indian culture and traditions, adding authenticity and meaning to spiritual practices.",
        ],
        specification: ["10 Pieces in One pack"],
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
];
