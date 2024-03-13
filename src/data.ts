export type Product = {
  name: string;
  description: string;
  price: number;
  imgUrls: string[];
  rating: number;
  rating_count: number;
  options: ProductOption[];
};

export type ProductOption = {
  label: string;
  values: ProductOptionValue[];
};

export type ProductOptionValue = {
  name: string;
  addedCosts: number;
};

export const PRODUCTS: Product[] = [
  {
    name: "DIE BRATPFANNE",
    description:
      "„Die Bratpfanne“ ist mehr als nur ein Küchenutensil – es ist ein Symbol für handwerkliche Perfektion und ästhetische Eleganz. Hergestellt aus feinstem Gusseisen und veredelt mit einem handgefertigten Holzgriff, repräsentiert sie eine nahtlose Verbindung von Funktionalität und Stil.",
    price: 129.0,
    imgUrls: [
      "https://jaxx-roadhouse.de/wp-content/uploads/2024/01/01.webp",
    ],
    rating: 4.5,
    rating_count: 123,
    options: [
      {
        label: "Seasoning",
        values: [
          { name: "ohne Seasoning", addedCosts: 0 },
          { name: "mit Seasoning", addedCosts: 10 },
        ],
      },
      {
        label: "Größe",
        values: [
          { name: "26 cm", addedCosts: 0 },
          { name: "28 cm", addedCosts: 10 },
        ],
      },
      {
        label: "Holzgriff",
        values: [
          { name: "Walnussholz", addedCosts: 0 },
          { name: "Rosenholz", addedCosts: 0 },
        ],
      },
      {
        label: "Deckel",
        values: [
          { name: "ohne Deckel", addedCosts: 0 },
          { name: "mit Deckel", addedCosts: 25 },
        ],
      },
    ],
  },

  {
    name: "DER DUTCH OVEN",
    description:
      "Die gelegentlichen Kochabenden mit Freunden und der Familie sind irgendwie immer das Gleiche. Du möchtest etwas Neues ausprobieren und deine Liebsten mal wieder überraschen? Der Dutch Oven aus hochwertigen Gusseisen ist eine tolle Alternative zum Grill oder Smoker und ein wahres Abenteuer. Er kann zum Kochen, Braten, Schmoren, Frittieren, Dünsten und sogar Backen verwendet werden.",
    price: 64.9,
    imgUrls: [
      "https://m.media-amazon.com/images/I/61GMaYnAk+L._AC_SL1006_.jpg",
    ],
    rating: 4.6,
    rating_count: 127,
    options: [],
  },

  {
    name: "DER DECKEL",
    description:
      "Der optimale Deckel für DIE BRATPFANNE. DER DECKEL ist sehr hitzebeständig und erlaubt eine vielfältigere Anwendung der Pfanne. DER DECKEL ist in zwei Größen verfügbar.",
    price: 25,
    imgUrls: [
      "/Deckel.png",
    ],
    rating: 4.5,
    rating_count: 2,
    options: [
        {
            label: "Größe",
            values: [
              { name: "26 cm", addedCosts: 0 },
              { name: "28 cm", addedCosts: 3 },
            ],
          },
    ],
  },

  {
    name: "DAS KÜCHENMESSER",
    description:
      "Das JAXX ROADHOUSE PROFI Küchenmesser ist Dein vielseitiger Begleiter in der Küche. Ganz gleich ob Fleisch, Fisch, Gemüse oder Kräuter. Jeder Schnitt wird eine Freude sein!",
    price: 50.64,
    imgUrls: [
      "https://m.media-amazon.com/images/I/816qz+OXToL._AC_SL1500_.jpg",
    ],
    rating: 5.0,
    rating_count: 2,
    options: [],
  },

  {
    name: "DAS STEAKMESSER",
    description:
      "Das JAXX ROADHOUSE PROFI Steakmesser ist Dein vielseitiger Begleiter in der Küche. Ganz gleich ob Fleisch, Fisch, Gemüse oder Kräuter. Jeder Schnitt wird eine Freude sein!",
    price: 50.64,
    imgUrls: [
      "https://m.media-amazon.com/images/I/81PDRrXoPoL._AC_SL1500_.jpg",
    ],
    rating: 4.3,
    rating_count: 18,
    options: [],
  },

  {
    name: "DAS SANTOKUMESSER",
    description:
      "Das JAXX ROADHOUSE PROFI Santokumesser ist Dein vielseitiger Begleiter in der Küche. Ganz gleich ob Fleisch, Fisch, Gemüse oder Kräuter. Jeder Schnitt wird eine Freude sein!",
    price: 50.64,
    imgUrls: [
      "https://m.media-amazon.com/images/I/81PDRrXoPoL._AC_SL1500_.jpg",
    ],
    rating: 5.0,
    rating_count: 2,
    options: [],
  },

  {
    name: "DER REINIGER",
    description:
      "Entferne lästige, festgebackene Lebensmittelreste im Nu. Mit dem Ringreiniger sehen deine Gusseisenprodukte nach jeder Nutzung aus wie neu.",
    price: 8.0,
    imgUrls: [
      "https://m.media-amazon.com/images/I/71BgkBwpLOL._AC_SL1485_.jpg",
    ],
    rating: 4.3,
    rating_count: 55,
    options: [],
  },

  {
    name: "DIE GRILLPLATTE",
    description:
      "Egal ob in deinem Garten auf dem Grill oder in deinem Haus auf dem Herd oder Ofen - die Grill Platte lässt sich unabhängig vom Wetter vielseitig zum Grillen und Braten einsetzen",
    price: 39.9,
    imgUrls: [
      "https://m.media-amazon.com/images/I/81APgf5lvtL._AC_SL1500_.jpg",
    ],
    rating: 4.3,
    rating_count: 63,
    options: [],
  },

  {
    name: "DER TOPFUNTERSETZER",
    description:
      "SPEICHERT DIE HITZE der auf dem Gussuntersetzer abgestellten Töpfe und Pfannen und hält ihre Inhalte somit länger warm",
    price: 10.9,
    imgUrls: [
      "https://m.media-amazon.com/images/I/61cHi5d8BzL._AC_SL1485_.jpg",
    ],
    rating: 4.4,
    rating_count: 33,
    options: [],
  },

  {
    name: "DAS SEASONINGÖL",
    description:
      "Das Seasoning Öl für Ihre Gusseisenprodukte. Egal ob Pfanne oder Dutch Oven, mit unserem Seasoning Öl pflegen Sie Ihre lieblingsprodukte noch einfacher und sorgen für eine lebenslange Freude am Produkt",
    price: 10.9,
    imgUrls: ["/Seasoning_Flasche.png"],
    rating: 5.0,
    rating_count: 71,
    options: [],
  },
];
