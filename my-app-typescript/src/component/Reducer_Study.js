import React, {useState, useRef} from "react";

interface Person {
  firstname: string;
  lastname: string;
  age?: number;
}

interface Props {
  text: string;
  number?: number;
  boolean?: boolean;
  handleChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void
  obj: Person
}

export const TextField: React.FC<Props> = ({text, obj, handleChange}) => {
  const [count, setCount] = useState<string | null> ('hello')
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}

// what the type to pass in the notice; 