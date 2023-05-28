import { ColorsEnum } from "styles/colors";
import publicImages from "@constants/public-images";

export type GameType = {
  name: string;
  title: string;
  image: string;
  description?: string;
  difficulty?: {
    id: number;
    level: number;
    points: number;
    exercisesCount: number
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
  color: ColorsEnum;
  description?: string;
  cite?: string,
  games: GameType[];
  disabled?: boolean;
  image?: string
};

export const games: GamesType = {
  visual_perception: [
    {
      name: "visual_differentiation",
      title: "Rozdíly",
      image: publicImages.activityIcons.differentiation,
      description: "visual_differentiation description",
      difficulty: [
        { id: 1, level: 1, points: 10, exercisesCount: 5 },
        { id: 2, level: 2, points: 20, exercisesCount: 8 },
        { id: 3, level: 3, points: 30, exercisesCount: 8 },
        { id: 4, level: 4, points: 50, exercisesCount: 10 },
      ],
    },
    {
      name: "a_s",
      title: "Skládání tvarů",
      description: "a_s description",
      image: publicImages.activityIcons.a_s,
      difficulty: [
        { id: 1, level: 1, points: 10, exercisesCount: 5 },
        { id: 2, level: 2, points: 20, exercisesCount: 8 },
        { id: 3, level: 3, points: 30, exercisesCount: 10 },
      ],
    },
    {
      name: "visual_memory",
      title: "Zraková paměť",
      description: "visual_memory description",
      image: publicImages.activityIcons.memory,
      difficulty: [
        { id: 1, level: 1, points: 10, exercisesCount: 5 },
        { id: 2, level: 2, points: 20, exercisesCount: 8 },
        { id: 3, level: 3, points: 30, exercisesCount: 8 },
        { id: 4, level: 4, points: 70, exercisesCount: 10 },
      ],
    },
  ],
  auditory_perception: [
    {
      name: "sound_differentiation",
      title: "Zvuky",
      description: "sound_differentiation description",
      difficulty: [
        { id: 1, level: 1, points: 10, exercisesCount: 5 },
        { id: 2, level: 2, points: 20, exercisesCount: 8 },
        { id: 3, level: 3, points: 30, exercisesCount: 10 }
      ],
      image: publicImages.activityIcons.differentiation,
    },
    {
      name: "word_differentiation",
      title: "Slova",
      description: "word_differentiation description",
      difficulty: [
        { id: 1, level: 1, points: 10, exercisesCount: 5 }
      ],
      image: publicImages.activityIcons.words,
    },
    {
      name: "audio_memory",
      title: "Sluchová paměť",
      description: "audio_memory description",
      difficulty: [
        { id: 1, level: 1, points: 10, exercisesCount: 5 },
        { id: 2, level: 2, points: 20, exercisesCount: 8 },
        { id: 3, level: 3, points: 30, exercisesCount: 10 }
      ],
      image: publicImages.activityIcons.memory,
    },
  ],

  seriality: [
    {
      name: "3_pictures",
      title: "Příběh",
      description: "3_pictures description",
      image: publicImages.activityIcons.seriality,
      difficulty: [
        { id: 1, level: 1, points: 10, exercisesCount: 5 },
      ]
    }
  ],

  language_practicing: [
    {
      name: "language_practicing",
      title: "Cvičení s jazykem",
      description: "language_practicing description",
      image: publicImages.activityIcons.oromotorics,
      difficulty: [
        { id: 1, level: 1, points: 5, exercisesCount: 10 }
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
    color: ColorsEnum.primary,
    description:
      "Prostřednictvím zraku poznáváme okolní svět. Hry na rozvoj zrakového vnímání podporují vývoj mluvené řeči, dílčí funkce jsou úzce provázány. Správně rozvinuté zrakové vnímání je důležité pro získávání, zpracování a uchování informací z okolí a následně pozitivně ovlivní výuku a úspěšnost ve škole.",
    cite: "Bednářová, 2015",
    games: games.visual_perception,
    image: publicImages.activityIcons.differentiation
  },

  {
    name: "auditory_perception",
    title: "Sluchové vnímání",
    shortTitle: "Sluch",
    color: ColorsEnum.fifty,
    icon: "hearing",
    labels: [
      {
        name: "auditory_perception",
        color: "#48CDD1",
        description: "Posiluje sluchové vnímání",
      },
    ],
    description:
      "Sluch je nezastupitelný pro řečový vývoj, je jedním z prostředků komunikace. Pro osvojení správné artikulace má sluch spolu se zrakem zásadní význam. Hry na rozvoj sluchového vnímání podporují rozlišovací schopnosti, všímání si melodie a rytmu řeči, délek a pořadí hlásek.",
    cite: "Bednářová, 2015",
    games: games.auditory_perception,
    image: publicImages.activityIcons.differentiation
  },

  {
    name: "seriality",
    title: "Serialita",
    color: ColorsEnum.tertiary,
    icon: "layers",
    description:
      "Hry na rozvoj časové posloupnosti podporují rozumění dějovým souvislostem, uvědomování si příčiny a důsledku a vnímání plynutí času.",
    cite: "Bednářová, 2015",
    games: games.seriality,
    image: publicImages.activityIcons.seriality
  },

  {
    name: "language_practicing",
    title: "Procvičování jazyka",
    shortTitle: "Jazyk",
    color: ColorsEnum.fourty,
    icon: "language",
    description:
      "Cvičení na rozvoj obratnosti jazyka pomáhají zlepšit motoriku, cit a vnímání pozice jazyka a tím následně usnadňují výslovnost jednotlivých hlásek.",
    cite: "Bednářová, 2015",
    games: games.language_practicing,
    image: publicImages.activityIcons.oromotorics
  },

  {
    name: "space_orientation",
    title: "Prostorová orientace",
    shortTitle: "Prostor",
    color: ColorsEnum.fifty,
    icon: "accessibility",
    disabled: true,
    games: [],
  },
];

export default activityConf;
