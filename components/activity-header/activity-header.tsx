import React, { useContext } from 'react'
import styles from './styles.module.css'
import HeaderWrapper from '../header-wrapper/header-wrapper'
import BackIcon from '../back-icon'
import { useRouter } from 'next/router'
import ModalContext from '../../contexts/modal-context'
import * as S from "./styled";

type ActivityHeaderProps = {tasksCount: number, currentTask: number, title: string}

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
      header: 'Chcete odejít?'
    })
  }
  const menuItems = [
    <S.BackIconWrapper key="game-menu-icons">
      <BackIcon onClick={routeBack} />
    </S.BackIconWrapper>,
    <div key="game-menu-timer">
      <p>{title}</p>
    </div>,
    <S.Score key="game-menu-profile">
      <p>
        {currentTask} / {tasksCount}
      </p>
    </S.Score>
  ]

  return <HeaderWrapper>{menuItems}</HeaderWrapper>
}

export default ActivityHeader
