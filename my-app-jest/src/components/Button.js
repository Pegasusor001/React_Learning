import React from "react";
import "./Button.css";

// define a data-testid
function Button(props) {
  return (
    <button
      className="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export { Button };
