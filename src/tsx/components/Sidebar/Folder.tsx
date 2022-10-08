import * as React from "react";
import getMaxHeight from "../../helpers/getMaxHeight";
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
  setMaxHeight?: (value: number) => any;
}
function renderChildren(props: FolderProps) {
  return props.children.map((folder, index) => {
    return <Folder key={`${index}-${folder.name}`} {...folder} />;
  });
}
function Folder(props: FolderProps) {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <StyledFolder>
      <StyledFolderLabel>
        <StyledFolderExpandButton
          onClick={(e) => {
            setCollapsed(!collapsed);
          }}
        >
          <StyledFolderExpand collapsed={collapsed} src={FolderExpandIcon} alt="expand" />
        </StyledFolderExpandButton>
        <StyledFolderIcon src={FolderIcon} alt="folder" />
        {props.name}
      </StyledFolderLabel>
      <StyledFolderChildren
        collapsed={collapsed}
      >
        {renderChildren(props)}
      </StyledFolderChildren>
    </StyledFolder>
  );
}

export default Folder;
