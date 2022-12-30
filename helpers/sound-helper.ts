import Ladybug from "../components/svg/templates/ladybug";
import Car from "../components/svg/templates/car";
import Lego from "../components/svg/templates/lego";

export const audioDiffConf = {
  1: [
    {
      incorrect: [
        { name: "test1", svg: Car },
        { name: "test2", svg: Lego },
      ],
      correct: { name: "test3", svg: Ladybug },
      sound: "@public/sounds/test-sound.mp3",
    },
  ],
  2: [
    {
      incorrect: [
        { name: "test1", svg: Car },
        { name: "test2", svg: Lego },
      ],
      correct: { name: "test3", svg: Ladybug },
      sound: "@public/sounds/test-sound.mp3",
    },
  ],
  3: [
    {
      incorrect: [
        { name: "test1", svg: Car },
        { name: "test2", svg: Lego },
      ],
      correct: { name: "test3", svg: Ladybug },
      sound: "@public/sounds/test-sound.mp3",
    },
  ],
};
