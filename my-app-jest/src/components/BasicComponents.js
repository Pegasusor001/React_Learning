import React, { useState } from "react";
import "./BasicComponents.css";

// define a data-testid
function BasicComponents(props) {
  return (
    <>
      <div className="div">Div</div>
      <button className="button" onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
}

export { BasicComponents };
