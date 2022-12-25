import React, { useContext } from "react";
import CoreContext from "../../contexts/core-context";
import Switch from "../switch";

function DarkModeSwitch() {
  const coreContext = useContext(CoreContext);

  const _onChangeTheme = (value) => {
    coreContext.changeTheme(value ? "dark" : "light");
  };
  return (
    <Switch
      onChange={_onChangeTheme}
      value={coreContext?.theme === "dark"}
      enabledIcon={"on"}
      disabledIcon={"off"}
    />
  );
}

export default DarkModeSwitch;