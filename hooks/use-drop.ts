import { useContext } from "react"
import { CardType } from "@hooks/use-get-cards"
import DndContext from '@contexts/dnd-context'


const useDrop = () => {
    const dndContext = useContext(DndContext)
    const onItemDropHandle = (item: CardType, index: number) => {
        dndContext?.setPlacedCards((previousPlacedValue) => {
            const indexOfPreviousPlaceOfItem = previousPlacedValue.reduce(
                (result: number | undefined, placedItem, index) => {
                    if (placedItem?.keyImage === item?.keyImage) {
                        return index
                    } else {
                        return result
                    }
                },
                undefined
            )

            const updatedPlacedCards = [...previousPlacedValue]
            const currentValue = updatedPlacedCards[index]
            updatedPlacedCards[index] = item

            if (typeof indexOfPreviousPlaceOfItem === "number") {
                (updatedPlacedCards[indexOfPreviousPlaceOfItem] = currentValue)
            }

            dndContext?.setAvaibleCards((previousAvaibleValue) => {
                const filtredValue = previousAvaibleValue.filter(
                    (avaibleCard) => avaibleCard?.keyImage !== item?.keyImage
                )
                return filtredValue
            })
            return updatedPlacedCards
        })
    }

    return { onItemDropHandle }
}

export default useDrop;