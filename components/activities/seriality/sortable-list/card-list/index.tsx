import React, { useContext, useCallback, useRef, useEffect } from 'react'
import { useDragDropManager } from "react-dnd";
import update from 'immutability-helper'
import { useScroll } from 'hooks/useScroll'
import SerialityContext from '@contexts/seriality-context'
import { CardType } from '@contexts/seriality-context/seriality-context-provider/use-get-cards'
import * as S from './styled'
import Card from '../card'

type CardListType = {
    // cards: CardType[],
    // onHandleChange: (cards: CardType[]) => void
}

const CardList: React.FC<CardListType> = () => {
    const serialityContext = useContext(SerialityContext)
    const wrapperRef = useRef<null | HTMLDivElement>(null);

    const { updatePosition } = useScroll(wrapperRef);

    const dragDropManager = useDragDropManager();
    const monitor = dragDropManager.getMonitor();

    useEffect(() => {
        const unsubscribe = monitor.subscribeToOffsetChange(() => {
            const offset = monitor.getSourceClientOffset()?.y as number;
            console.log("offset", offset)
            updatePosition({ position: offset, isScrollAllowed: true });
        });
        return unsubscribe;
    }, [monitor, updatePosition]);

    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            serialityContext?.setCards((prevCards: CardType[]) =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex] as CardType],
                    ],
                })
            )
        },
        [serialityContext]
    )

    const renderCard = useCallback(
        (card: CardType, index: number) => {
            return (
                <Card
                    key={card.keyImage}
                    index={index}
                    id={card.keyImage}
                    content={card.img}
                    moveCard={moveCard}
                />
            )
        },
        [moveCard]
    )


    return (
        <S.Wrapper ref={wrapperRef}>
            {serialityContext?.cards.map((card, i) => renderCard(card, i))}
        </S.Wrapper>
    )
}

export default CardList
