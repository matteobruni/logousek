import React from "react";
import { SwitchWrapper, SwitchPointer, SwitchBackground } from "./styled";

type SwitchProps = {
  enabledIcon: React.ReactElement | string;
  disabledIcon: React.ReactElement | string;
  onChange: (value: boolean) => void;
  value: boolean;
};

const Switch: React.FC<SwitchProps> = ({
  enabledIcon,
  disabledIcon,
  onChange,
  value,
}) => {
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
};

export default Switch;
