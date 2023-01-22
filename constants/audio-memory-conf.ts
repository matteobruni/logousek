
import { testSound } from "constants/sounds";
import Ladybug from "../components/svg/templates/ladybug";
import Car from "../components/svg/templates/car";
import Lego from "../components/svg/templates/lego";
import Logousek from "@components/svg/templates/logousek";
import Bear from "@components/svg/templates/bear";
import Cloud from "@components/svg/templates/cloud";
import { audioDiffConfType } from "@helpers/sound-helper";

const audioMemoryConf: audioDiffConfType = {
    "1": [
        {
            name: "test1",
            incorrect: [
                { name: "test1", svg: Car },
                { name: "test2", svg: Lego },
            ],
            correct: { name: "test3", svg: Ladybug },
            sound: testSound,
        },
    ],
    "2": [
        {
            name: "test4",
            incorrect: [
                { name: "test1", svg: Car },
                { name: "test2", svg: Cloud },
                { name: "test8", svg: Bear },
            ],
            correct: { name: "test3", svg: Ladybug },
            sound: testSound,
        },
    ],
    "3": [
        {
            name: "test5",
            incorrect: [
                { name: "test1", svg: Car },
                { name: "test2", svg: Lego },
                { name: "test6", svg: Logousek },
            ],
            correct: { name: "test3", svg: Ladybug },
            sound: testSound,
        },
    ],
};

export default audioMemoryConf