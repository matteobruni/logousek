import React, {
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'

import ModalButtons from './modal-buttons'
import CloseIcon from '../close-icon'
import * as S from './styled'

interface ModalProps {
  closeBackdrop: () => void
}

export interface ModalDetailType {
  header?: string
  content?: string | React.ReactNode
  closeDisabled?: boolean
  onOkClick?: () => void
  onStornoText?: string | React.ReactNode
  onOkText?: string | React.ReactNode
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
  useImperativeHandle(ref, () => ({
    show: showModal,
    close: closeModal,
  }))

  const showModal = ({
    header = '',
    content = '',
    closeDisabled = false,
    autoWidth = false,
    ...remainAttrs
  }: ShowModalParamsTypes) => {
    setShow(true)
    setModalDetail({
      header,
      content,
      closeDisabled,
      autoWidth,
      ...remainAttrs
    })
  }

  const closeModal = () => {
    setShow(false)
    closeBackdrop()
  }

  return (
    <S.ModalWrapper show={show}>
      <S.ModalContainer autoWidth={!!modalDetail.autoWidth}>
        <S.Modalheader>
          <S.ModalTitle>{modalDetail.header} </S.ModalTitle>
          {!modalDetail.closeDisabled ? (
            <S.CloseIconWrapper>
              <CloseIcon onClick={closeModal} />
            </S.CloseIconWrapper>
          ) : null}
        </S.Modalheader>
        <S.ModalContent>{modalDetail.content}</S.ModalContent>
        <ModalButtons onOkClick={modalDetail.onOkClick} onStornoClick={modalDetail.onStornoClick} onOkText={modalDetail.onOkText} onStornoText={modalDetail.onStornoText} />
      </S.ModalContainer>
    </S.ModalWrapper>
  )
})
