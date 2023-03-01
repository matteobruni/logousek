export type GameType = {
  name: string;
  title: string;
  image: string;
  difficulty?: {
    id: number;
    title: string;
    points: number;
  }[];
};

export type GamesType = {
  [key: string]: GameType[];
};

export type LabelType = {
  name: string;
  color: string;
  description: string;
};

export type ActivityType = {
  name: string;
  icon: string;
  title: string;
  shortTitle?: string;
  labels?: LabelType[];
  color: string;
  description?: string;
  games: GameType[];
  disabled?: boolean;
};

export const games: GamesType = {
  visual_perception: [
    {
      name: "visual_differentiation",
      title: "Rozdíly",
      image: "#",
      difficulty: [
        { id: 1, title: "Lehké", points: 10 },
        { id: 2, title: "Střední", points: 20 },
        { id: 3, title: "Těžké", points: 30 },
        { id: 4, title: "Detaily", points: 50 },
      ],
    },
    {
      name: "a_s",
      title: "Skládání tvarů",
      image: "#",
      difficulty: [
        { id: 1, title: "Lehké", points: 10 },
        { id: 2, title: "Střední", points: 20 },
        { id: 3, title: "Těžké", points: 30 },
      ],
    },
    {
      name: "visual_memory",
      title: "Zraková paměť",
      image: "#",
      difficulty: [
        { id: 1, title: "Lehké", points: 10 },
        { id: 2, title: "Střední", points: 20 },
        { id: 3, title: "Těžké", points: 30 },
        { id: 4, title: "Řazení", points: 70 },
      ],
    },
  ],
  auditory_perception: [
    {
      name: "sound_differentiation",
      title: "Diferenciace zvuků",
      difficulty: [
        { id: 1, title: "Lehké", points: 10 },
        { id: 2, title: "Střední", points: 20 },
        { id: 3, title: "Těžké", points: 30 }
      ],
      image: "#",
    },
    {
      name: "word_differentiation",
      title: "Diferenciace slov",
      difficulty: [
        { id: 1, title: "Lehké", points: 10 }
      ],
      image: "#",
    },
    {
      name: "audio_memory",
      title: "Sluchová paměť",
      difficulty: [
        { id: 1, title: "Lehké", points: 10 },
        { id: 2, title: "Střední", points: 20 },
        { id: 3, title: "Těžké", points: 30 }
      ],
      image: "#",
    },
  ],

  seriality: [
    {
      name: "3_pictures",
      title: "3 obrázky",
      image: "#", difficulty: [
        { id: 1, title: "Lehké", points: 10 },
      ]
    }
  ],

  language_practicing: [
    {
      name: "language_practicing",
      title: "Cvičení s jazykem",
      image: "#",
      difficulty: [
        { id: 1, title: "Střední", points: 5 }
      ],
    },
  ],
};

const activityConf: ActivityType[] = [
  {
    name: "visual_perception",
    icon: "visibility",
    title: "Zrakové vnímání",
    shortTitle: "Zrak",
    color: "primary",
    description:
      "Prostřednictvím zraku poznáváme okolní svět. Hry na rozvoj zrakového vnímání podporují vývoj mluvené řeči, dílčí funkce jsou úzce provázány. Správně rozvinuté zrakové vnímání je důležité pro získávání, zpracování a uchování informací z okolí a následně pozitivně ovlivní výuku a úspěšnost ve škole.",
    games: games.visual_perception,
  },

  {
    name: "auditory_perception",
    title: "Sluchové vnímání",
    shortTitle: "Sluch",
    color: "secondary",
    icon: "hearing",
    labels: [
      {
        name: "auditory_perception",
        color: "#48CDD1",
        description: "Posiluje sluchové vnímání",
      },
      { name: "test", color: "#A7E843", description: "test24" },
    ],
    description:
      "Sluch je nezastupitelný pro řečový vývoj, je jedním z prostředků komunikace. Pro osvojení správné artikulace má sluch spolu se zrakem zásadní význam. Hry na rozvoj sluchového vnímání podporují rozlišovací schopnosti, všímání si melodie a rytmu řeči, délek a pořadí hlásek.",
    games: games.auditory_perception,
  },

  {
    name: "seriality",
    title: "Serialita",
    color: "tertiary",
    icon: "layers",
    description:
      "Hry na rozvoj časové posloupnosti podporují rozumění dějovým souvislostem, uvědomování si příčiny a důsledku a vnímání plynutí času.",
    games: games.seriality,
  },

  {
    name: "language_practicing",
    title: "Procvičování jazyka",
    shortTitle: "Jazyk",
    color: "fourty",
    icon: "language",
    description:
      "Cvičení na rozvoj obratnosti jazyka pomáhají zlepšit motoriku, cit a vnímání pozice jazyka a tím následně usnadňují výslovnost jednotlivých hlásek.",
    games: games.language_practicing,
  },

  {
    name: "space_orientation",
    title: "Prostorová orientace",
    shortTitle: "Prostor",
    color: "fourty",
    icon: "accessibility",
    disabled: true,
    games: [],
  },
];

export default activityConf;
