
import { NamedImage, animalsSrcs } from '@helpers/image-helper'

export const animalImages = {
    sheep: <NamedImage src={animalsSrcs.sheep} name="sheep" />,
    snake: <NamedImage src={animalsSrcs.snake} name="snake" />,
    horse: <NamedImage src={animalsSrcs.horse} name="horse" />,
    goat: <NamedImage src={animalsSrcs.goat} name="goat" />,
    fly: <NamedImage src={animalsSrcs.fly} name="fly" />,
    elephant: <NamedImage src={animalsSrcs.elephant} name="elephant" />,
    dog: <NamedImage src={animalsSrcs.dog} name="dog" />,
    chicken: <NamedImage src={animalsSrcs.chicken} name="chicken" />,
    cat: <NamedImage src={animalsSrcs.cat} name="cat" />,
    cow: <NamedImage src={animalsSrcs.cow} name="cow" />,
}

export const animalImagesConf = [
    { name: 'sheep', svg: animalImages.sheep },
    { name: 'snake', svg: animalImages.snake },
    { name: 'horse', svg: animalImages.horse },
    { name: 'goat', svg: animalImages.goat },
    { name: 'fly', svg: animalImages.fly },
    { name: 'elephant', svg: animalImages.elephant },
    { name: 'dog', svg: animalImages.dog },
    { name: 'cow', svg: animalImages.cow },
    { name: 'chicken', svg: animalImages.chicken },
    { name: 'cat', svg: animalImages.cat },
]