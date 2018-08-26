import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import { observe } from "./game";
import "./styles.css";

const rootElement = document.getElementById("root");
observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, rootElement)
);
