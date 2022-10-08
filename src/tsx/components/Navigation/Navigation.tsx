import React from "react";
import Navigate from "./Navigate";
import Reload from "./Reload";
import { StyledNavigation } from "./StyledNavigation";

function Navigation() {
  return (
    <StyledNavigation>
      <Navigate direction="back" />
      <Navigate direction="forward" />
      <Reload />
    </StyledNavigation>
  );
}

export default Navigation;
