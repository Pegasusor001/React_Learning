import React from "react";

// React.createElement("tag name", props, content)
function RegExp() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => {
        console.log(i);
        return (
          <>
            <p>
              /^(?:([A-Za-z]+):)?(\/{(0, 3)})([0-9.\-A-Za-z]+)
              (?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
            </p>
          </>
        );
      })}
    </div>
  );
}

export { RegExp };
