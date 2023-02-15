import { audioDiffConfType } from "@helpers/sound-helper";
import { getIncorectItems } from "@helpers/sound-helper";
import { NamedImage, animalsSrcs, wordDifferentiationSrcs } from "@helpers/image-helper";
import {
    ssssss,
    shshsh
} from "./sounds";



const Images = {
    train: <NamedImage src={wordDifferentiationSrcs.train} name="train" />,
    stork: <NamedImage src={wordDifferentiationSrcs.stork} name="stork" />,
    onion: <NamedImage src={wordDifferentiationSrcs.onion} name="onion" />,
    earthworm: <NamedImage src={animalsSrcs.earthworm} name="earthworm" />,
    snake: <NamedImage src={animalsSrcs.snake} name="snake" />,
}

const ImagesArray = [
    { name: "train", svg: Images.train },
    { name: "stork", svg: Images.stork },
    { name: "onion", svg: Images.onion },
    { name: "snake", svg: Images.snake },
    { name: "earthworm", svg: Images.earthworm },

]

const getWordDiffConf = (): audioDiffConfType => ({
    "1": [
        {
            name: "train",
            incorrect: getIncorectItems("train", ImagesArray),
            correct: {
                name: "train", svg: Images.train
            },
            sound: shshsh,
        },
        {
            name: "snake",
            incorrect: getIncorectItems("snake", ImagesArray),
            correct: {
                name: "snake", svg: Images.snake
            },
            sound: ssssss,
        },
    ],
});


export default getWordDiffConf