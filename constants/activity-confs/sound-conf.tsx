import {
    sheep,
    snake,
    horse,
    goat,
    fly,
    elephant,
    dog,
    cow,
    chicken,
    cat,
    wind,
    storm,
    river,
    ringingPhone,
    nailHammering,
    flowingFaceut,
    dripingFaucet,
    doorKnocking,
    paperCut,
    crumpledPaper,
} from 'constants/activity-confs/sounds'
import { AudioDiffConfType } from '@helpers/sound-helper'
import { NamedImage, normalSrcs } from '@helpers/image-helper'
import { getIncorectItems } from '@helpers/array-helper'
import { animalImagesConf, animalImages } from '@constants/image-confs/animal-conf'



const NormalImages = {
    crumpledPaper: (
        <NamedImage src={normalSrcs.crumpledPaper} name="crumpled-paper" />
    ),
    doorKnocking: (
        <NamedImage src={normalSrcs.doorKnocking} name="doorKnocking" />
    ),
    dripingFaucet: (
        <NamedImage src={normalSrcs.dripingFaucet} name="dripingFaucet" />
    ),
    flowingFaceut: (
        <NamedImage src={normalSrcs.flowingFaceut} name="flowingFaceut" />
    ),
    nailHammering: (
        <NamedImage src={normalSrcs.nailHammering} name="nailHammering" />
    ),
    paperCut: <NamedImage src={normalSrcs.paperCut} name="paperCut" />,
    ringingPhone: (
        <NamedImage src={normalSrcs.ringingPhone} name="ringingPhone" />
    ),
    river: <NamedImage src={normalSrcs.river} name="river" />,
    storm: <NamedImage src={normalSrcs.storm} name="storm" />,
    wind: <NamedImage src={normalSrcs.wind} name="wind" />,
}

const secondLevelImages = [
    { name: 'crumpledPaper', svg: NormalImages.crumpledPaper },
    { name: 'doorKnocking', svg: NormalImages.doorKnocking },
    { name: 'dripingFaucet', svg: NormalImages.dripingFaucet },
    { name: 'flowingFaceut', svg: NormalImages.flowingFaceut },
    { name: 'nailHammering', svg: NormalImages.nailHammering },
]

const thirdLevelImages = [
    { name: 'paperCut', svg: NormalImages.paperCut },
    { name: 'ringingPhone', svg: NormalImages.ringingPhone },
    { name: 'river', svg: NormalImages.river },
    { name: 'storm', svg: NormalImages.storm },
    { name: 'wind', svg: NormalImages.wind },
]

console.log("getIncorectItems", getIncorectItems)
const getSoundConf = (): AudioDiffConfType => ({
    '1': [
        {
            name: 'sheep',
            incorrect: getIncorectItems('sheep', animalImagesConf),
            correct: {
                name: 'sheep',
                svg: animalImages.sheep,
            },
            sound: sheep,
        },
        {
            name: 'snake',
            incorrect: getIncorectItems('snake', animalImagesConf),
            correct: {
                name: 'snake',
                svg: animalImages.snake,
            },
            sound: snake,
        },
        {
            name: 'horse',
            incorrect: getIncorectItems('horse', animalImagesConf),
            correct: {
                name: 'horse',
                svg: animalImages.horse,
            },
            sound: horse,
        },
        {
            name: 'goat',
            incorrect: getIncorectItems('goat', animalImagesConf),
            correct: {
                name: 'goat',
                svg: animalImages.goat,
            },
            sound: goat,
        },
        {
            name: 'fly',
            incorrect: getIncorectItems('fly', animalImagesConf),
            correct: {
                name: 'fly',
                svg: animalImages.fly,
            },
            sound: fly,
        },
        {
            name: 'elephant',
            incorrect: getIncorectItems('elephant', animalImagesConf),
            correct: {
                name: 'elephant',
                svg: animalImages.elephant,
            },
            sound: elephant,
        },
        {
            name: 'dog',
            incorrect: getIncorectItems('dog', animalImagesConf),
            correct: {
                name: 'dog',
                svg: animalImages.dog,
            },
            sound: dog,
        },
        {
            name: 'cow',
            incorrect: getIncorectItems('cow', animalImagesConf),
            correct: {
                name: 'cow',
                svg: animalImages.cow,
            },
            sound: cow,
        },
        {
            name: 'chicken',
            incorrect: getIncorectItems('chicken', animalImagesConf),
            correct: {
                name: 'chicken',
                svg: animalImages.chicken,
            },
            sound: chicken,
        },
        {
            name: 'cat',
            incorrect: getIncorectItems('cat', animalImagesConf),
            correct: {
                name: 'cat',
                svg: animalImages.cat,
            },
            sound: cat,
        },
    ],
    '2': [
        {
            name: 'crumpledPaper',
            incorrect: getIncorectItems('crumpledPaper', secondLevelImages),
            correct: {
                name: 'crumpledPaper',
                svg: NormalImages.crumpledPaper,
            },
            sound: crumpledPaper,
        },
        {
            name: 'doorKnocking',
            incorrect: getIncorectItems('doorKnocking', secondLevelImages),
            correct: {
                name: 'doorKnocking',
                svg: NormalImages.doorKnocking,
            },
            sound: doorKnocking,
        },
        {
            name: 'dripingFaucet',
            incorrect: getIncorectItems('dripingFaucet', secondLevelImages),
            correct: {
                name: 'dripingFaucet',
                svg: NormalImages.dripingFaucet,
            },
            sound: dripingFaucet,
        },
        {
            name: 'flowingFaceut',
            incorrect: getIncorectItems('flowingFaceut', secondLevelImages),
            correct: {
                name: 'flowingFaceut',
                svg: NormalImages.flowingFaceut,
            },
            sound: flowingFaceut,
        },
        {
            name: 'nailHammering',
            incorrect: getIncorectItems('nailHammering', secondLevelImages),
            correct: {
                name: 'nailHammering',
                svg: NormalImages.nailHammering,
            },
            sound: nailHammering,
        },
    ],
    '3': [
        {
            name: 'paperCut',
            incorrect: getIncorectItems('paperCut', thirdLevelImages),
            correct: {
                name: 'paperCut',
                svg: NormalImages.paperCut,
            },
            sound: paperCut,
        },
        {
            name: 'ringingPhone',
            incorrect: getIncorectItems('ringingPhone', thirdLevelImages),
            correct: {
                name: 'ringingPhone',
                svg: NormalImages.ringingPhone,
            },
            sound: ringingPhone,
        },
        {
            name: 'river',
            incorrect: getIncorectItems('river', thirdLevelImages),
            correct: {
                name: 'river',
                svg: NormalImages.river,
            },
            sound: river,
        },
        {
            name: 'storm',
            incorrect: getIncorectItems('storm', thirdLevelImages),
            correct: {
                name: 'storm',
                svg: NormalImages.storm,
            },
            sound: storm,
        },
        {
            name: 'wind',
            incorrect: getIncorectItems('wind', thirdLevelImages),
            correct: {
                name: 'wind',
                svg: NormalImages.wind,
            },
            sound: wind,
        },
    ],
})

export default getSoundConf
