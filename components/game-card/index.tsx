import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import ActivityCard from "components/activity-card";
import ItemList from 'components/item-list';
import ModalContext from 'contexts/modal-context';
import { GameType } from 'constants/activity-confs/activity-conf';
import { P3 } from "components/typography/paragraph"

import * as S from "./styled";

type GameCardProps = { gameInfo: GameType }

const GameCard: React.FC<GameCardProps> = ({ gameInfo }) => {
  const [isDiffSiteShown, setIsDiffSiteShown] = useState(false)
  const router = useRouter()
  const modalContext = useContext(ModalContext)

  const redirectToActivity = (difficultyId?: number) => {
    const addictionQuery = difficultyId ? { difficulty: difficultyId } : {}
    modalContext?.closeModal()
    router.push({
      pathname: '/activity',
      query: { activityName: gameInfo.name, ...addictionQuery }
    })
  }

  const showDiffSide = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    if (!isDiffSiteShown) {
      setIsDiffSiteShown(true)
    }
  }

  const showMainSide = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setIsDiffSiteShown(false)
  }

  const showDifficultyModal = () => {
    if (Array.isArray(gameInfo.difficulty)) {
      if (gameInfo.difficulty.length > 1) {
        modalContext?.showModal({
          content: <ItemList items={gameInfo.difficulty} onItemClick={redirectToActivity} />,
          header: "Vyberte obtížnost",
          autoWidth: true
        })
      } else if (gameInfo.difficulty.length === 1) {
        redirectToActivity(gameInfo.difficulty[0].id)
      } else {
        redirectToActivity()
      }
    } else { redirectToActivity() }
  }

  return (
    <S.CardList>
      <S.InnedCard isDiffSiteShown={isDiffSiteShown}>
        <S.MainSide onClick={showDifficultyModal}>
          <ActivityCard fill={true}>
            <S.MainSideContainer>
              <S.InformIcon onClick={showDiffSide}>
                <i className={`material-icons`}>inform</i>
              </S.InformIcon>
              <S.Image
                src={gameInfo.image}
                alt={`${gameInfo.name}-image`}
              />
              <S.Description>{gameInfo.title}</S.Description>
            </S.MainSideContainer>
          </ActivityCard>
        </S.MainSide>
        <S.DescriptionSide>
          <ActivityCard fill={true}>
            <S.Navbar>
              <S.InformIcon onClick={showMainSide}>
                <i className={`material-icons`}>reply</i>
              </S.InformIcon>
            </S.Navbar>
            <S.Description>{gameInfo.title}</S.Description>
            <P3>
              {gameInfo.description}
            </P3>
          </ActivityCard>
        </S.DescriptionSide>
      </S.InnedCard>
    </S.CardList >
  )
}

export default GameCard