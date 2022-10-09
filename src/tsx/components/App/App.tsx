import React from "react";
import Location from "../Location/Location";
import { EntityTypes } from "../Main/Entity";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import { StyledApp, StyledBottom, StyledLeft, StyledRight, StyledTop } from "./StyledApp";

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
          <Main entities={[
            {
              type: EntityTypes.file,
              name: "File",
            },
            {
              type: EntityTypes.folder,
              name: "Folder",
            },
            {
              type: EntityTypes.image,
              name: "Image",
            },
            {
              type: EntityTypes.file,
              name: "File",
            },
            {
              type: EntityTypes.folder,
              name: "Folder",
            },
            {
              type: EntityTypes.image,
              name: "Image",
            },
            {
              type: EntityTypes.file,
              name: "File",
            },
            {
              type: EntityTypes.folder,
              name: "Folder",
            },
            {
              type: EntityTypes.image,
              name: "Image",
            },
            {
              type: EntityTypes.file,
              name: "File",
            },
            {
              type: EntityTypes.folder,
              name: "Folder",
            },
            {
              type: EntityTypes.image,
              name: "Image",
            },
            {
              type: EntityTypes.file,
              name: "File",
            },
            {
              type: EntityTypes.folder,
              name: "Folder",
            },
            {
              type: EntityTypes.image,
              name: "Image",
            },
            {
              type: EntityTypes.file,
              name: "File",
            },
            {
              type: EntityTypes.folder,
              name: "Folder",
            },
            {
              type: EntityTypes.image,
              name: "Image",
            },
            {
              type: EntityTypes.file,
              name: "File",
            },
            {
              type: EntityTypes.folder,
              name: "Folder",
            },
            {
              type: EntityTypes.image,
              name: "Image",
            },
          ]}/>
        </StyledRight>
      </StyledBottom>
    </StyledApp>
  );
}

export default App;
