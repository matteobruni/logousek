import styled from 'styled-components';

const CardImage = styled.img`
    width: 100%;
    height: 100%;
`

export const NamedImage: React.FC<{ src: string, name: string }> = ({ src, name }) => (
    <CardImage src={src} alt={`card-image-${name}`} />
);

const path = "/static"
const animalPath = `${path}/audio-svgs/animals`
const normalPath = `${path}/audio-svgs`
const serialityPath = `${path}/seriality-svgs`

export const animalsSrcs = {
    cat: `${animalPath}/cat.png`,
    chicken: `${animalPath}/chicken.png`,
    cow: `${animalPath}/cow.png`,
    dog: `${animalPath}/dog.png`,
    elephand: `${animalPath}/elephand.png`,
    fly: `${animalPath}/fly.png`,
    goat: `${animalPath}/goat.png`,
    horse: `${animalPath}/horse.png`,
    sheep: `${animalPath}/sheep.png`,
    snake: `${animalPath}/snake.png`,
    elephant: `${animalPath}/elephant.png`,
    earthworm: `${animalPath}/earthworm.png`
}

export const normalSrcs = {
    crumpledPaper: `${normalPath}/crumpled-paper.svg`,
    doorKnocking: `${normalPath}/door-knocking.svg`,
    dripingFaucet: `${normalPath}/driping-faucet.svg`,
    flowingFaceut: `${normalPath}/flowing-faceut.svg`,
    nailHammering: `${normalPath}/nail-hammering.svg`,
    paperCut: `${normalPath}/paper-cut.svg`,
    ringingPhone: `${normalPath}/ringing-phone.svg`,
    river: `${normalPath}/river.svg`,
    storm: `${normalPath}/storm.svg`,
    wind: `${normalPath}/wind.svg`
}

export const serialitySrcs = {
    banana: `${serialityPath}/banana/banana-1.svg`,
    banana2: `${serialityPath}/banana/banana-2.svg`,

    paper: `${serialityPath}/paper/paper-1.svg`,
    paper2: `${serialityPath}/paper/paper-2.svg`,
    paper3: `${serialityPath}/paper/paper-3.svg`,

    vase: `${serialityPath}/vase/vase-1.svg`,
    vase2: `${serialityPath}/vase/vase-2.svg`,
    vase3: `${serialityPath}/vase/vase-3.svg`,
}

export const wordDifferentiationSrcs = {
    train: `${normalPath}/train.jpg`,
    stork: `${normalPath}/stork.png`,
    onion: `${normalPath}/onion.png`
}