import { HTMLAttributes } from "react";
import styled from "styled-components";

export const StyledSidebar = styled.div`
  width: 100%;
  height: 100%;
`;
export const StyledFolder = styled.div``;
export const StyledFolderLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 30px;
`;
export const StyledFolderIcon = styled.img`
  height: 18px;
  width: auto;
`;
interface StyledFolderExpandProps extends HTMLAttributes<HTMLImageElement>{
  collapsed: boolean;
}
export const StyledFolderExpand = styled(StyledFolderIcon)`
  gap: 4px;
  transform: rotate(${(props: StyledFolderExpandProps) => {
    return props.collapsed ? "0deg" : "90deg"
  }});
`;
export const StyledFolderExpandButton = styled.button`
  background: none;
  border: none;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: rgba(0, 0, 0, 0.4);
  }
`;
interface StyledFolderChildrenProps extends HTMLAttributes<HTMLDivElement> {
  collapsed: boolean;
}
export const StyledFolderChildren = styled.div`
  margin-left: 16px;
  height: ${(props: StyledFolderChildrenProps) => {
    return props.collapsed ? "0px" : "auto";
  }};
  overflow: hidden;
  transition: .25s;
`;
