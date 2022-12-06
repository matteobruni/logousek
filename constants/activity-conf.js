export const games = {
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
        { id: 3, title: "Těžké", points: 30 }
      ],
    },
    {
      name: "visual_memory",
      title: "Zraková paměť",
      image: "#",
      difficulty: [
        { id: 1, title: "Lehké", points: 10 },
        { id: 2, title: "Střední", points: 20 },
        { id: 3, title: "Těžké", points: 30 }
      ],
    },
  ],
  auditory_perception: [
    {
      name: "audio_differentiation",
      title: "Diferenciace zvuků",
      image: "#",
    },
    {
      name: "word_differentiation",
      title: "Diferenciace slov",
      image: "#",
    },
    {
      name: "audio_memory",
      title: "Sluchová paměť",
      image: "#",
    },
  ],

  seriality: [
    {
      name: "3 pictures",
      title: "3 obrázky",
      image: "#",
    },
  ],

  language_practicing: [
    {
      name: "language_practicing",
      title: "Cvičení s jazykem",
      image: "#",
    },
  ],
};

const activityConf = [
  {
    name: "visual_perception",
    icon: "visibility",
    title: "Zrakové vnímání",
    shortTitle: "Zrak",
    color: "primary",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
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
      "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    games: games.auditory_perception,
  },

  {
    name: "seriality",
    title: "Serialita",
    color: "tertiary",
    icon: "layers",
    description:
      "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    games: games.seriality,
  },

  {
    name: "language_practicing",
    title: "Procvičování jazyka",
    shortTitle: "Jazyk",
    color: "fourty",
    icon: "language",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word.",
    games: games.language_practicing,
  },

  {
    name: "space_orientation",
    title: "Prostorová orientace",
    shortTitle: "Prostor",
    color: "fourty",
    icon: "accessibility",
    disabled: true,
  },
];

export default activityConf;
