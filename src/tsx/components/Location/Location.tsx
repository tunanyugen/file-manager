import * as React from "react";
import { StyledLocation } from "./StyledLocation";

export interface LocationProps {
  value: string;
}

function Location(props: LocationProps) {
  return <StyledLocation>{props.value}</StyledLocation>;
}

export default Location;
