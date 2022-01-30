import React, { useState } from "react";

function useCount(inital) {
  const [count, setCount] = useState(inital);
  return [count, setCount];
}

const useMutableObj = (x, y, z) => {
  const [obj, setObj] = useState({ a: x, b: y, c: z });
  return [obj, setObj];
};

export { useCount, useMutableObj };
