
import { sheep, snake, horse, goat, fly, elephant, dog, cow, chicken, cat } from "constants/sounds";
import Ladybug from "../components/svg/templates/ladybug";
import Car from "../components/svg/templates/car";
import Lego from "../components/svg/templates/lego";
import Logousek from "@components/svg/templates/logousek";
import Bear from "@components/svg/templates/bear";
import Cloud from "@components/svg/templates/cloud";
import { audioDiffConfType } from "@helpers/sound-helper";
import { NamedImage, animalsSrcs } from "@helpers/image-helper";
import { getRandomElementFromList } from "@helpers/array-helper";





const audioMemoryConf: audioDiffConfType = {
    "1": [



        // {
        //     name: "snake",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: snake,
        // },
        // {
        //     name: "horse",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: horse,
        // },
        // {
        //     name: "goat",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: goat,
        // },
        // {
        //     name: "fly",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: fly,
        // },
        // {
        //     name: "elephant",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: elephant,
        // },



        // {
        //     name: "dog",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: dog,
        // },
        // {
        //     name: "cow",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: cow,
        // },
        // {
        //     name: "chicken",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Lego },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: chicken,
        // },
        // {
        //     name: "cat",
        //     incorrect: [
        //         { name: "test1", svg: Car },
        //         { name: "test2", svg: Cloud },
        //         { name: "test8", svg: Bear },
        //     ],
        //     correct: { name: "test3", svg: Ladybug },
        //     sound: cat,
        // },
    ],
    // "2": [
    //     {
    //         name: "test4",
    //         incorrect: [
    //             { name: "test1", svg: Car },
    //             { name: "test2", svg: Cloud },
    //             { name: "test8", svg: Bear },
    //         ],
    //         correct: { name: "test3", svg: Ladybug },
    //         sound: cat,
    //     },
    // ],
    // "3": [
    //     {
    //         name: "test5",
    //         incorrect: [
    //             { name: "test1", svg: Car },
    //             { name: "test2", svg: Lego },
    //             { name: "test6", svg: Logousek },
    //         ],
    //         correct: { name: "test3", svg: Ladybug },
    //         sound: cat,
    //     },
    // ],
};

export default audioMemoryConf