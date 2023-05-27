import React, { useContext } from 'react'
import HeaderWrapper from '../header-wrapper/header-wrapper'
import CloseIcon from '../close-icon'
import { useRouter } from 'next/router'
import ModalContext from '../../contexts/modal-context'
import * as S from "./styled";

type ActivityHeaderProps = { tasksCount: number, currentTask: number, title: string }

const ActivityHeader: React.FC<ActivityHeaderProps> = ({ tasksCount, currentTask, title }) => {
  const router = useRouter()
  const modalContext = useContext(ModalContext)
  const routeBack = () => {
    modalContext?.showModal({
      onOkClick: () => {
        router.back()
        modalContext.closeModal()
      },
      onStornoClick: modalContext.closeModal,
      header: 'Chcete odejít?',
      autoWidth: true
    })
  }

  const taskElapsed = currentTask - 1

  const menuItems = [
    <S.CloseIconWrapper key="game-menu-icons">
      <CloseIcon onClick={routeBack} />
    </S.CloseIconWrapper>,
    <div key="game-menu-timer">
      <p>{title}</p>
    </div>,
    <S.Score key="game-menu-profile">
      <S.ScoreText>
        {taskElapsed} / {tasksCount}
      </S.ScoreText>
      <S.ProgressBarWrap>
        <S.ProgressBar>
          <S.ProgressBarInner width={`${(100 / tasksCount) * taskElapsed}%`} />
        </S.ProgressBar>
      </S.ProgressBarWrap>
    </S.Score>
  ]

  return <HeaderWrapper>{menuItems}</HeaderWrapper>
}

export default ActivityHeader
