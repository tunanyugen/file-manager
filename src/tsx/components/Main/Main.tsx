import React from "react";
import Entity, { EntityProps } from "./Entity";
import { StyledMain, StyledMainBody } from "./StyledMain";

export interface MainProps {
  entities: EntityProps[];
}

function renderEntities(props: MainProps) {
  return props.entities.map((entity, index) => {
    return <Entity key={`${entity.name}-${index}`} {...entity} />;
  });
}

function Main(props: MainProps) {
  return (
    <StyledMain>
      <StyledMainBody>{renderEntities(props)}</StyledMainBody>
    </StyledMain>
  );
}

export default Main;
