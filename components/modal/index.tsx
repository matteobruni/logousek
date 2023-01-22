import React, { useState, forwardRef, useImperativeHandle, useContext } from 'react'
import BackIcon from '../back-icon'
import ButtonRow from '../button-row/button-row'
import {
  ModalWrapper,
  ModalContainer,
  Modalheader,
  ModalContent,
  BackIconWrapper
} from './styled'
import Button, { ButtonSizesEnum } from '../button'
import { ThemeContext } from 'styled-components'

interface ModalProps { closeBackdrop: () => void }

interface ModalDetailType {
  header?: string
  content?: string
  closeDisabled?: boolean
  onOkClick?: () => void
  onStornoClick?: () => void
  autoWidth?: boolean
}

export type ShowModalParamsTypes = ModalDetailType

export interface ModalInterfaceType {
  show: (params: ShowModalParamsTypes) => void
  close: () => void
}

export default forwardRef(function Modal({ closeBackdrop }: ModalProps, ref) {
  const [show, setShow] = useState<boolean>()
  const [modalDetail, setModalDetail] = useState<ShowModalParamsTypes>({})
  const themeContextData = useContext(ThemeContext)
  useImperativeHandle(ref, () => ({
    show: showModal,
    close: closeModal
  }))

  const showModal = ({
    header = '',
    content = '',
    closeDisabled = false,
    onOkClick,
    onStornoClick,
    autoWidth = false
  }: ShowModalParamsTypes) => {
    setShow(true)
    setModalDetail({
      header,
      content,
      closeDisabled,
      onOkClick,
      onStornoClick,
      autoWidth
    })
  }

  const closeModal = () => {
    setShow(false)
    closeBackdrop()
  }
  return (
    <ModalWrapper show={show} >
      <ModalContainer autoWidth={!!modalDetail.autoWidth}>
        <Modalheader>
          <h3>{modalDetail.header} </h3>
          {
            !modalDetail.closeDisabled && <BackIconWrapper><BackIcon onClick={closeModal} /></BackIconWrapper>
          }
        </Modalheader>
        < ModalContent >{modalDetail.content}</ModalContent>
        {
          ((modalDetail.onOkClick != null) || (modalDetail.onStornoClick != null))
            ? (
              <ButtonRow>
                <>
                  {modalDetail.onOkClick !== undefined ? (
                    <Button
                      onClick={modalDetail.onOkClick}
                      color="#fff"
                      backgroundColor={themeContextData?.colors?.tertiary}
                      size={ButtonSizesEnum.xs}
                    >
                      Pokračovat
                    </Button>
                  ) : undefined}
                  {
                    modalDetail.onStornoClick !== undefined ? (
                      <Button
                        color="#fff"
                        size={ButtonSizesEnum.xs}
                        backgroundColor={themeContextData?.colors?.seventy}
                        onClick={modalDetail.onStornoClick}
                      >
                        Storno
                      </Button>
                    ) : undefined
                  }</>
              </ButtonRow>
            )
            : undefined}
      </ModalContainer>
    </ModalWrapper>
  )
})
