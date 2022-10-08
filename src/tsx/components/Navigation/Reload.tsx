import React from "react";
import { StyledReload } from "./StyledNavigation";
const ReloadIcon = require("../../../assets/reload.svg");

function Reload() {
  return (
    <StyledReload>
      <img src={ReloadIcon} alt="reload" />
    </StyledReload>
  );
}

export default Reload;
