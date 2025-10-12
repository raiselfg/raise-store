export const categories = [
  { name: "t-shirt" },
  { name: "hoodie" },
  { name: "jacket" },
  { name: "pants" },
  { name: "shoes" },
];

export const brands = [
  { name: "Rick Owens" },
  { name: "Undercover" },
  { name: "Enfants Riches Déprimés" },
  { name: "Prada" },
];

export const sizes = [
  { name: "0 (XS)" },
  { name: "1 (S)" },
  { name: "2 (M)" },
  { name: "3 (L)" },
  { name: "4 (XL)" },
  { name: "37" },
  { name: "38" },
  { name: "39" },
  { name: "40" },
  { name: "41" },
  { name: "42" },
  { name: "43" },
  { name: "44" },
  { name: "45" },
];

export const products = [
  {
    name: "Rick Owens DRKSHDW Hollywood Sneakers",
    price: 649,
    description:
      "Кроссовки Rick Owens DRKSHDW Hollywood — смелый минималистичный дизайн с характерным заострённым носком. Удобные, с высоким берцем и культовой подошвой-трейлер, они создают эффектный силуэт. Выполнены из прочных материалов, идеально подходят для создания авангардных уличных образов. Отличный выбор для ценителей уличной моды с эстетикой high-fashion.",
    brandName: brands[0],
    categoryName: categories[4],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/28/56/95/65/28569565_57957486_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/28/56/95/65/28569565_57957475_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/28/56/95/65/28569565_57960235_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/28/56/95/65/28569565_57964853_1000.jpg",
      },
    ],
    sizes: sizes.slice(5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Enfants Riches Déprimés My Role in the War T-Shirt",
    price: 1146,
    description:
      "Футболка Enfants Riches Déprimés My Role in the War — провокационный предмет от культового бренда, сочетающий эпатаж и роскошь. Изготовлена из высококачественного хлопка, украшена принтом с ироничным или мрачным посылом, характерным для ERD. Оверсайз-крой и нарочито небрежная отделка подчёркивают бунтарскую эстетику марки. Идеальна для тех, кто ценит эксклюзивность и смелые заявления в моде.",
    brandName: brands[2],
    categoryName: categories[0],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/30/96/38/51/30963851_60157457_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/30/96/38/51/30963851_60111005_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/30/96/38/51/30963851_60110991_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/30/96/38/51/30963851_60111035_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Undercover Graphic Print Hoodie",
    price: 920,
    description:
      "Кофта Undercover Chaos/Balance — сочетание хаоса и гармонии в визуальной форме. Мягкий плотный хлопок, принт на груди и рукавах подчёркивают философскую эстетику бренда. Прямой крой и утончённые детали делают вещь выразительной и одновременно универсальной. Отличный выбор для layering-образов в японском стиле.",
    brandName: brands[1],
    categoryName: categories[1],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/26/41/18/82/26411882_56248338_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/26/41/18/82/26411882_56248336_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Rick Owens Geth Jacket",
    price: 1699,
    description:
      "Куртка Rick Owens Geth — культовая вещь с архитектурным силуэтом, выполненная из плотного хлопка и кожи. Ассиметричная молния, расширенные плечи и удлинённый низ создают агрессивный футуристический стиль. Идеальна для монохромных total-black образов.",

    brandName: brands[0],
    categoryName: categories[2],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/13/17/35/44/13173544_16144773_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/17/35/44/13173544_16144775_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/17/35/44/13173544_16144777_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/17/35/44/13173544_16144779_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/13/17/35/44/13173544_16144781_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: 'Enfants Riches Déprimés "Forget to Answer" Shrunken Hoodie',
    price: 1240,
    description:
      "Кофта Enfants Riches Déprimés Forget to Answer Shrunken hoodie — дерзкий лонгслив с культовой надписью на спине. Изготовлена вручную из состаренного хлопка с эффектом «грязной» стирки. Оверсайз-силуэт и открытые швы подчёркивают мрачную эстетику гранджа 90-х, создавая уникальный арт-объект.",

    brandName: brands[2],
    categoryName: categories[1],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/30/87/73/68/30877368_59948240_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/30/87/73/68/30877368_59948232_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: 'Undercover "Watch Yourself" T-Shirt',
    price: 674,
    description:
      "Футболка Undercover Watch Yourself — провокационный минимализм с параноидальным графическим принтом. Белая база с контрастным чёрным изображением глаз и скрытых символов подчёркивает фірменную эстетику бренда, сочетая элементы поп-культуры и философской концепции наблюдения и контроля.",
    brandName: brands[1],
    categoryName: categories[0],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/27/64/23/30/27642330_58419563_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/27/64/23/30/27642330_58419589_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Rick Owens Pod Shorts",
    price: 590,
    description:
      "Подшорты Rick Owens Pod Shorts — знаковый элемент бренда с характерным объёмным силуэтом. Укороченные, с заниженной линией шага и эластичным поясом, они подчёркивают архитектурность стиля Owens и идеально подходят для многослойных urban-образов.",
    brandName: brands[0],
    categoryName: categories[3],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/24/01/79/02/24017902_54247027_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/24/01/79/02/24017902_54247004_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/24/01/79/02/24017902_54247000_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/24/01/79/02/24017902_54247025_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/24/01/79/02/24017902_54247002_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: 'Enfants Riches Déprimés "Lobotomy" T-Shirt',
    price: 1090,
    description:
      "Футболка ERD Lobotomy — арт-провокация в духе панка. Ручной принт, эффект выцветания и асимметричный крой создают уникальный образ. Символика бренда отражает внутреннюю боль и мятеж, делая вещь выразительной для смелых модников.",
    brandName: brands[2],
    categoryName: categories[0],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/27/72/48/55/27724855_59931772_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/27/72/48/55/27724855_59931790_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: 'Undercover "85 Lab" Jacket',
    price: 1530,
    description:
      "Undercover 85 Lab — лёгкая куртка-бомбер с вышивкой и психоделическим паттерном. Технический нейлон, контрастная подкладка и молнии в милитари-стиле создают выразительный урбанистический образ, идеально подходящий для арт-ориентированных луков.",
    brandName: brands[1],
    categoryName: categories[2],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/30/61/90/99/30619099_59727972_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/30/61/90/99/30619099_59727980_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Prada Re-Nylon Gabardine Jacket",
    price: 2450,
    description:
      "Prada Re-Nylon Gabardine — куртка, объединяющая роскошь и технологичность. Выполнена из переработанного нейлона, украшена лаконичными деталями и логотипом-треугольником на груди. Лёгкая и практичная, идеально подходит для современного городского гардероба с акцентом на эко-осознанность.",
    brandName: brands[3],
    categoryName: categories[2],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/25/17/64/11/25176411_55409288_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/25/17/64/11/25176411_55409300_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/25/17/64/11/25176411_55409279_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/25/17/64/11/25176411_55409291_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/25/17/64/11/25176411_55409278_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: 'Undercover "Broken Frame" Trousers',
    price: 740,
    description:
      "Undercover Broken Frame — штаны с классическим силуэтом, дополненные неожиданными разрезами и панелями. Мягкая шерсть и асимметрия подчёркивают философию бренда: нарушать каноны, оставаясь изящным.",
    brandName: brands[1],
    categoryName: categories[3],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/30/08/03/59/30080359_59467783_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/30/08/03/59/30080359_59467526_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Rick Owens Bauhaus SS T-Shirt",
    price: 490,
    description:
      "Rick Owens Bauhaus SS — футболка из плотного хлопка с необычным кроем плеч. Минималистичный и архитектурный дизайн подчёркивает силуэт носителя, идеально подходит для слоистых образов и комбинирования с кожаными куртками.",
    brandName: brands[0],
    categoryName: categories[0],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/29/62/96/59/29629659_59756177_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/29/62/96/59/29629659_59756154_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/29/62/96/59/29629659_59756211_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/29/62/96/59/29629659_59756193_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Enfants Riches Déprimés Logo-Print Distressed Hoodie",
    price: 1380,
    description:
      "Enfants Riches Déprimés Patchwork Pain — кофта, выполненная в духе депрессивного панк-арта. Ручная сборка из разных кусков ткани, граффити-стиль и фактурная обработка создают уникальный коллекционный предмет для ценителей смелой и нестандартной моды.",
    brandName: brands[2],
    categoryName: categories[1],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/29/82/70/84/29827084_59816390_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/29/82/70/84/29827084_59816406_1000.jpg",
      },
    ],
    sizes: sizes.slice(0, 5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
  {
    name: "Prada Leather Ankle Boots",
    price: 970,
    description:
      "Prada Apex Boot — ботинки в стиле техногенной альтернативы классическим милитари. Удлинённый нос, высокое голенище и вставки из резины и кожи обеспечивают устойчивость и комфорт. Идеальны для создания универсальных и стильных городских образов.",
    brandName: brands[3],
    categoryName: categories[4],
    images: [
      {
        url: "https://cdn-images.farfetch-contents.com/20/93/43/41/20934341_50962414_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/20/93/43/41/20934341_50962418_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/20/93/43/41/20934341_50962416_1000.jpg",
      },
      {
        url: "https://cdn-images.farfetch-contents.com/20/93/43/41/20934341_50962417_1000.jpg",
      },
    ],
    sizes: sizes.slice(5).map((size) => ({
      sizeName: size.name,
      quantity: Math.floor(Math.random() * 11),
    })),
  },
];
