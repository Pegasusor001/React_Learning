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
  handleChange?: (event: React.ChangeEvent<HTMLDivElement>) => void
  obj: Person
}


function onClick(): void{
  alert("Button Clicked")
}

export const TextField: React.FC<Props> = ({text, obj, handleChange}) => {
  const [count, setCount] = useState<string | null> ('hello')
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} value={text + obj.firstname}/>
      <button onClick={onClick}>Alert</button>
    </div>
  )
}

// what the type to pass in the notice; 