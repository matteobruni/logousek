import React, { useState, forwardRef, useImperativeHandle } from "react";
import BackIcon from "../back-icon";
import ButtonRow from "../button-row/button-row";
import {
  ModalWrapper,
  ModalContainer,
  Modalheader,
  ModalContent,
} from "./styled";
import Button from "../button";

export default forwardRef(function Modal({ closeBackdrop }, ref) {
  const [show, setShow] = useState();
  const [modalDetail, setModalDetail] = useState("");

  useImperativeHandle(ref, () => ({
    show: showModal,
    close: closeModal,
  }));

  const showModal = ({
    header = "",
    content = "",
    closeDisabled = false,
    onOkClick,
    onStornoClick,
  }) => {
    setShow(true);
    setModalDetail({
      header,
      content,
      closeDisabled,
      onOkClick,
      onStornoClick,
    });
  };

  const closeModal = () => {
    setShow(false);
    setModalDetail({});
    closeBackdrop();
  };
  return (
    <ModalWrapper show={show}>
      <ModalContainer>
        <Modalheader>
          <h3>{modalDetail.header}</h3>
          {!modalDetail.closeDisabled && <BackIcon onClick={closeModal} />}
        </Modalheader>
        <ModalContent>{modalDetail.content}</ModalContent>
        {Boolean(modalDetail.onOkClick || modalDetail.onStornoClick) && (
          <ButtonRow>
            {Boolean(modalDetail.onOkClick) && (
              <Button
                onClick={modalDetail.onOkClick}
                color="rgb(132, 224, 101);"
                size="xs"
              >
                Pokračovat
              </Button>
            )}
            {Boolean(modalDetail.onStornoClick) && (
              <Button
                color="#fff"
                size="xs"
                onClick={modalDetail.onStornoClick}
              >
                Storno
              </Button>
            )}
          </ButtonRow>
        )}
      </ModalContainer>
    </ModalWrapper>
  );
});
