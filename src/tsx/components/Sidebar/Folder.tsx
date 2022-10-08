import * as React from "react";
import {
  StyledFolder,
  StyledFolderChildren,
  StyledFolderExpand,
  StyledFolderExpandButton,
  StyledFolderIcon,
  StyledFolderLabel,
} from "./StyledSidebar";
const FolderIcon = require("../../../assets/folder.svg");
const FolderExpandIcon = require("../../../assets/folder-expand.svg");

export interface FolderProps {
  name: string;
  children: FolderProps[];
}
function renderChildren(props: FolderProps) {
  return props.children.map((folder) => {
    return <Folder {...folder} />;
  });
}
function Folder(props: FolderProps) {
  return (
    <StyledFolder>
      <StyledFolderLabel>
        <StyledFolderExpandButton>
          <StyledFolderExpand src={FolderExpandIcon} alt="expand" />
        </StyledFolderExpandButton>
        <StyledFolderIcon src={FolderIcon} alt="folder" />
        {props.name}
      </StyledFolderLabel>
      <StyledFolderChildren>{renderChildren(props)}</StyledFolderChildren>
    </StyledFolder>
  );
}

export default Folder;
