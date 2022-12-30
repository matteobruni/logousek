import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import img from './../../public/images/02.svg'
import ModalContext from '../../contexts/modal-context'
import ItemList from '../item-list'
import { GameType } from 'constants/activity-conf'
import * as S from "./styled"

type CardsProps = { gameInfo: GameType }

const Cards: React.FC<CardsProps> = ({ gameInfo }) => {
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
    Array.isArray(gameInfo.difficulty) && gameInfo.difficulty.length
      ? modalContext?.showModal({
        content: <ItemList items={gameInfo.difficulty} onItemClick={redirectToActivity} />,
        header: "Vyberte obtížnost"
      })
      : redirectToActivity()
  }

  return (
    <S.CardWrapper>
      <S.InnedCard isDiffSiteShown={isDiffSiteShown}>
        <S.MainSide onClick={showDifficultyModal}>
          <S.InformIcon onClick={showDiffSide}>
            <i className={`material-icons`}>inform</i>
          </S.InformIcon>
          <Image
            className={'rounded-md'}
            width={300}
            height={300}
            layout="responsive"
            src={img}
            alt="img"
          />
          <S.Description>{gameInfo.title}</S.Description>
        </S.MainSide>
        <S.DifficultySide>
          <S.Navbar>
            <S.InformIcon onClick={showMainSide}>
              <i className={`material-icons`}>reply</i>
            </S.InformIcon>
          </S.Navbar>
          <S.Description>{gameInfo.title}</S.Description>
          <p>
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </S.DifficultySide>
      </S.InnedCard>
    </S.CardWrapper>
  )
}

export default Cards