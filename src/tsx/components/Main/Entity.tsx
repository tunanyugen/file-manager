import React from "react";
import {
  StyledEntity,
  StyledEntityIcon,
  StyledEntityLabel,
} from "./StyledMain";
const FolderIcon = require("../../../assets/folder.svg");
const ImageIcon = require("../../../assets/image.svg");
const FileIcon = require("../../../assets/file.svg");
const QuestionIcon= require("../../../assets/question.svg");

export enum EntityTypes {
  "folder",
  "image",
  "file",
}
export interface EntityProps {
  type: EntityTypes;
  name: string;
}

function getIcon(type: EntityTypes) {
  switch (type) {
    case EntityTypes.folder:
      return FolderIcon;
      break;
    case EntityTypes.image:
      return ImageIcon;
      break;
    case EntityTypes.file:
      return FileIcon;
      break;
    default:
      return QuestionIcon;
  }
}

function Entity(props: EntityProps) {
  return (
    <StyledEntity>
      <StyledEntityIcon src={getIcon(props.type)} alt="entity" />
      <StyledEntityLabel>{props.name}</StyledEntityLabel>
    </StyledEntity>
  );
}

export default Entity;
