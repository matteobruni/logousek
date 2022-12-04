import React from "react";
import { SwitchWrapper, SwitchPointer, SwitchBackground } from "./styled";
export default function Switch({ enabledIcon, disabledIcon, onChange, value }) {

  const _onChangeHangler = () => {
    onChange(!value);
  };
  return (
    <SwitchWrapper onClick={_onChangeHangler}>
      <SwitchPointer enabled={value}>
        {value ? enabledIcon : disabledIcon}
      </SwitchPointer>
      <SwitchBackground />
    </SwitchWrapper>
  );
}
