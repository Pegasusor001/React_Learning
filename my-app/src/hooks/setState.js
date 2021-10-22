import React, {useState} from 'react';

export default function useCount(inital) {
  const [count, setCount] = useState(inital)
  return [count, setCount]
}