import React, { useState } from "react";
import {
  LoginModalWrapper,
  LoginModalForm,
  CustomInput,
  LabelWithInput,
  CustomLabel,
  CustomButtonRow,
} from "./styled";
// import { Button } from "../modal/modal-button";
import Button from "../button";
import ButtonRow from "../button-row/button-row";

export default function LoginModal({onFormFilledHandler}) {
  const [userName, setUserName] = useState("");
  const _generateRandomName = () => {
    setUserName(`Guest${Math.round(Math.random() * 9999)}`);
  };

  const _onUserNameChangehandler = (event) => {
    setUserName(event.target.value);
  };

  const _send = () => {
    onFormFilledHandler(userName)
  };
  return (
    <LoginModalWrapper>
      <LoginModalForm
        onChange={console.log}
      >
        <LabelWithInput>
          <CustomLabel>Jméno:</CustomLabel>
          <CustomInput
            type="text"
            value={userName}
            onChange={_onUserNameChangehandler}
          />
        </LabelWithInput>
        <ButtonRow>
          <Button
            type="submit"
            onClick={_generateRandomName}
            color="green"
            size="xs"
          >
            Generovat jméno
          </Button>
          <Button type="submit" onClick={_send} color="green" size="xs">
            Vytvořit
          </Button>
        </ButtonRow>
      </LoginModalForm>
    </LoginModalWrapper>
  );
}
