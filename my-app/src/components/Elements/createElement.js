import React from "react";

// React.createElement("tag name", props, content)
function CreateElement() {
  const name = "Hello World";

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "This is Hello World"),
    React.createElement("strong", null, name)
  );
}

export { CreateElement };