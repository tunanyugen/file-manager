import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./tsx/components/App/App";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as Element | DocumentFragment
);

root.render(<App />);
