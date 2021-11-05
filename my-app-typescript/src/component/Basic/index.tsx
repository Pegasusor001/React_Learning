import React, { useState, useRef } from "react";
import { Person, Props } from "./types";

// Example 1: Assign a Component function with Reac.FC<Props>
function onClick(): void {
  alert("Button Clicked");
}

// 暂时不懂 useRef 放在这干啥，先放着吧
export const BasicStudy1: React.FC<Props> = ({ text, obj, handleChange }) => {
  const [count, setCount] = useState<string | null>("hello");
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input
        ref={inputRef}
        onChange={handleChange}
        value={text + obj.firstname}
      />
      <button onClick={onClick}>Alert</button>
    </div>
  );
};
