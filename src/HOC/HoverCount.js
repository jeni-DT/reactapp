import { Button } from "bootstrap";
import React from "react";

const HoverCount = (props) => {
  return (
    <h2 onMouseOver={props.increment}>{props.name} Hover {props.count} times</h2>
  )
};

export default HoverCount;
