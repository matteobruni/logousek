import React, { useState, forwardRef, useImperativeHandle } from 'react'
import BackIcon from '../back-icon'
import ButtonRow from '../button-row/button-row'
import {
  ModalWrapper,
  ModalContainer,
  Modalheader,
  ModalContent
} from './styled'
import Button, { ButtonSizesEnum } from '../button'

interface ModalProps { closeBackdrop: () => void }

interface ModalDetailType {
  header?: string
  content?: string
  closeDisabled?: boolean
  onOkClick?: () => void
  onStornoClick?: () => void
}

export type ShowModalParamsTypes = ModalDetailType

export interface ModalInterfaceType {
  show: (params: ShowModalParamsTypes) => void
  close: () => void
}

export default forwardRef(function Modal({ closeBackdrop }: ModalProps, ref) {
  const [show, setShow] = useState<boolean>()
  const [modalDetail, setModalDetail] = useState<ShowModalParamsTypes>({})

  useImperativeHandle(ref, () => ({
    show: showModal,
    close: closeModal
  }))

  const showModal = ({
    header = '',
    content = '',
    closeDisabled = false,
    onOkClick,
    onStornoClick
  }: ShowModalParamsTypes) => {
    setShow(true)
    console.log("content", content, "content",header, {
      header,
      content,
      closeDisabled,
      onOkClick,
      onStornoClick
    })
    setModalDetail({
      header,
      content,
      closeDisabled,
      onOkClick,
      onStornoClick
    })
  }

  const closeModal = () => {
    setShow(false)
    setModalDetail({})
    closeBackdrop()
  }
  console.log("content",modalDetail )
  return (
    <ModalWrapper show={show} >
      <ModalContainer>
        <Modalheader>
          <h3>{modalDetail.header} </h3>
          {
            !modalDetail.closeDisabled && <BackIcon onClick={closeModal} />
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
                      color="rgb(132, 224, 101);"
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
