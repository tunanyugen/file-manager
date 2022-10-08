import React from "react";
import Location from "../Location/Location";
import { StyledMain, StyledMain as StyledRight } from "../Main/StyledMain";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import { StyledApp, StyledBottom, StyledLeft, StyledTop } from "./StyledApp";

function App() {
  return (
    <StyledApp>
      <StyledTop>
        <Navigation />
        <Location value="C:\" />
      </StyledTop>
      <StyledBottom>
        <StyledLeft>
          <Sidebar />
        </StyledLeft>
        <StyledRight>
          <StyledMain />
        </StyledRight>
      </StyledBottom>
    </StyledApp>
  );
}

export default App;
