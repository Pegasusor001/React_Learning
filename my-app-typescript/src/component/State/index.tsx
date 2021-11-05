import React, { useState } from "react";
import { Props } from "./types";

// React Function with Props, combine with Children
const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  return <div>{children({ count, setCount })}</div>;
};

// React Function without Props
const StateStudy1: React.FC = () => {
  return (
    <Counter>
      {({ count, setCount }) => (
        <div>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </Counter>
  );
};

export { StateStudy1 };
