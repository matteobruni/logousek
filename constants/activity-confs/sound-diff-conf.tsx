import {
    sheep, snake, horse, goat, fly, elephant, dog, cow, chicken, cat,
    wind, storm, river, ringingPhone, nailHammering, flowingFaceut, dripingFaucet, doorKnocking, paperCut, crumpledPaper
} from "constants/activity-confs/sounds";
import { audioDiffConfType } from "@helpers/sound-helper";
import { NamedImage, animalsSrcs, normalSrcs } from "@helpers/image-helper";
import { getIncorectItems } from "@helpers/sound-helper";


const animalImages = {
    sheep: <NamedImage src={animalsSrcs.sheep} name="sheep" />,
    snake: <NamedImage src={animalsSrcs.snake} name="snake" />,
    horse: <NamedImage src={animalsSrcs.horse} name="horse" />,
    goat: <NamedImage src={animalsSrcs.goat} name="goat" />,
    fly: <NamedImage src={animalsSrcs.fly} name="fly" />,
    elephant: <NamedImage src={animalsSrcs.elephant} name="elephant" />,
    dog: <NamedImage src={animalsSrcs.dog} name="dog" />,
    chicken: <NamedImage src={animalsSrcs.chicken} name="chicken" />,
    cat: <NamedImage src={animalsSrcs.cat} name="cat" />,
    cow: <NamedImage src={animalsSrcs.cow} name="cow" />
}


const firstLevelImages = [
    { name: "sheep", svg: animalImages.sheep },
    { name: "snake", svg: animalImages.snake },
    { name: "horse", svg: animalImages.horse },
    { name: "goat", svg: animalImages.goat },
    { name: "fly", svg: animalImages.fly },
    { name: "elephant", svg: animalImages.elephant },
    { name: "dog", svg: animalImages.dog },
    { name: "cow", svg: animalImages.cow },
    { name: "chicken", svg: animalImages.chicken },
    { name: "cat", svg: animalImages.cat }
]

const NormalImages = {
    crumpledPaper: <NamedImage src={normalSrcs.crumpledPaper} name="crumpled-paper" />,
    doorKnocking: <NamedImage src={normalSrcs.doorKnocking} name="doorKnocking" />,
    dripingFaucet: <NamedImage src={normalSrcs.dripingFaucet} name="dripingFaucet" />,
    flowingFaceut: <NamedImage src={normalSrcs.flowingFaceut} name="flowingFaceut" />,
    nailHammering: <NamedImage src={normalSrcs.nailHammering} name="nailHammering" />,
    paperCut: <NamedImage src={normalSrcs.paperCut} name="paperCut" />,
    ringingPhone: <NamedImage src={normalSrcs.ringingPhone} name="ringingPhone" />,
    river: <NamedImage src={normalSrcs.river} name="river" />,
    storm: <NamedImage src={normalSrcs.storm} name="storm" />,
    wind: <NamedImage src={normalSrcs.wind} name="wind" />
}

const secondLevelImages = [
    { name: "crumpledPaper", svg: NormalImages.crumpledPaper },
    { name: "doorKnocking", svg: NormalImages.doorKnocking },
    { name: "dripingFaucet", svg: NormalImages.dripingFaucet },
    { name: "flowingFaceut", svg: NormalImages.flowingFaceut },
    { name: "nailHammering", svg: NormalImages.nailHammering },
]

const thirdLevelImages = [
    { name: "paperCut", svg: NormalImages.paperCut },
    { name: "ringingPhone", svg: NormalImages.ringingPhone },
    { name: "river", svg: NormalImages.river },
    { name: "storm", svg: NormalImages.storm },
    { name: "wind", svg: NormalImages.wind }
]

const getSoundDiffConf = (): audioDiffConfType => ({
    "1": [
        {
            name: "sheep",
            incorrect: getIncorectItems("sheep", firstLevelImages),
            correct: {
                name: "sheep", svg: animalImages.sheep
            },
            sound: sheep,
        },
        {
            name: "snake",
            incorrect: getIncorectItems("snake", firstLevelImages),
            correct: {
                name: "snake", svg: animalImages.snake
            },
            sound: snake,
        },
        {
            name: "horse",
            incorrect: getIncorectItems("horse", firstLevelImages),
            correct: {
                name: "horse", svg: animalImages.horse
            },
            sound: horse,
        },
        {
            name: "goat",
            incorrect: getIncorectItems("goat", firstLevelImages),
            correct: {
                name: "goat", svg: animalImages.goat
            },
            sound: goat,
        },
        {
            name: "fly",
            incorrect: getIncorectItems("fly", firstLevelImages),
            correct: {
                name: "fly", svg: animalImages.fly
            },
            sound: fly,
        },
        {
            name: "elephant",
            incorrect: getIncorectItems("elephant", firstLevelImages),
            correct: {
                name: "elephant", svg: animalImages.elephant
            },
            sound: elephant,
        },
        {
            name: "dog",
            incorrect: getIncorectItems("dog", firstLevelImages),
            correct: {
                name: "dog", svg: animalImages.dog
            },
            sound: dog,
        },
        {
            name: "cow",
            incorrect: getIncorectItems("cow", firstLevelImages),
            correct: {
                name: "cow", svg: animalImages.cow
            },
            sound: cow,
        },
        {
            name: "chicken",
            incorrect: getIncorectItems("chicken", firstLevelImages),
            correct: {
                name: "chicken", svg: animalImages.chicken
            },
            sound: chicken,
        },
        {
            name: "cat",
            incorrect: getIncorectItems("cat", firstLevelImages),
            correct: {
                name: "cat", svg: animalImages.cat
            },
            sound: cat,
        },
    ],
    "2": [
        {
            name: "crumpledPaper",
            incorrect: getIncorectItems("crumpledPaper", secondLevelImages),
            correct: {
                name: "crumpledPaper", svg: NormalImages.crumpledPaper
            },
            sound: crumpledPaper,
        },
        {
            name: "doorKnocking",
            incorrect: getIncorectItems("doorKnocking", secondLevelImages),
            correct: {
                name: "doorKnocking", svg: NormalImages.doorKnocking
            },
            sound: doorKnocking,
        },
        {
            name: "dripingFaucet",
            incorrect: getIncorectItems("dripingFaucet", secondLevelImages),
            correct: {
                name: "dripingFaucet", svg: NormalImages.dripingFaucet
            },
            sound: dripingFaucet,
        },
        {
            name: "flowingFaceut",
            incorrect: getIncorectItems("flowingFaceut", secondLevelImages),
            correct: {
                name: "flowingFaceut", svg: NormalImages.flowingFaceut
            },
            sound: flowingFaceut,
        },
        {
            name: "nailHammering",
            incorrect: getIncorectItems("nailHammering", secondLevelImages),
            correct: {
                name: "nailHammering", svg: NormalImages.nailHammering
            },
            sound: nailHammering,
        },
    ],
    "3": [
        {
            name: "paperCut",
            incorrect: getIncorectItems("paperCut", thirdLevelImages),
            correct: {
                name: "paperCut", svg: NormalImages.paperCut
            },
            sound: paperCut,
        },
        {
            name: "ringingPhone",
            incorrect: getIncorectItems("ringingPhone", thirdLevelImages),
            correct: {
                name: "ringingPhone", svg: NormalImages.ringingPhone
            },
            sound: ringingPhone,
        },
        {
            name: "river",
            incorrect: getIncorectItems("river", thirdLevelImages),
            correct: {
                name: "river", svg: NormalImages.river
            },
            sound: river,
        },
        {
            name: "storm",
            incorrect: getIncorectItems("storm", thirdLevelImages),
            correct: {
                name: "storm", svg: NormalImages.storm
            },
            sound: storm,
        },
        {
            name: "wind",
            incorrect: getIncorectItems("wind", thirdLevelImages),
            correct: {
                name: "wind", svg: NormalImages.wind
            },
            sound: wind,
        },

    ]
});

export default getSoundDiffConf