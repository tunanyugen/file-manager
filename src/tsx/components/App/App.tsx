import React from "react";
import Location from "../Location/Location";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import { StyledApp, StyledLeft, StyledTop } from "./StyledApp";

function App() {
  return (
    <StyledApp>
      <StyledTop>
        <Navigation />
        <Location value="C:\" />
      </StyledTop>
      <StyledLeft>
        <Sidebar />
      </StyledLeft>
    </StyledApp>
  );
}

export default App;
