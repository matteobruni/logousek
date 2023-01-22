
import { testSound2 } from "constants/sounds";
import Ladybug from "../components/svg/templates/ladybug";
import Cloud from "@components/svg/templates/cloud";
import { audioDiffConfType } from "@helpers/sound-helper";

const wordDiffConf: audioDiffConfType = {
    "1": [
        {
            name: "test1",
            incorrect: [
                { name: "test1", svg: Cloud },
                { name: "test2", svg: Cloud },
            ],
            correct: { name: "test3", svg: Ladybug },
            sound: testSound2,
        }
    ],
};


export default wordDiffConf