import * as React from "react";
import Folder from "./Folder";
import { StyledSidebar } from "./StyledSidebar";

function Sidebar() {
  return (
    <StyledSidebar>
      <Folder
        name="Test"
        children={[
          { name: "Child 1", children: [{ name: "Child 1-1", children: [] }] },
          { name: "Child 2", children: [] },
        ]}
      />
    </StyledSidebar>
  );
}

export default Sidebar;
