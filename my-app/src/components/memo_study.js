// Memo用于保存渲染的结果，给定参数不发生变化时，不予渲染给定DOM

import React, {useState, useMemo} from 'react';

let ch 

const Child = ({a}) => {
  console.log("child render")
  return <h2>{a}</h2>
}

// 回调函数中的组件为useMemo所保存的组件，只有当a变化时，组件才会发 生变化
function Parent({a,b}) {
  const child1 = useMemo(() => <div>
    {console.log("This is a calculation")}
    <Child a={b} />
  </div>, [a])

  console.log("Are they the sam e:", child1 === ch)
  ch = child1

  const child2 = <div>
    {console.log("recalculate child2")}
    <Child a={b} />
  </div>

  return (
    <>
      {child1}
      {child2}
    </>
  )
}

function MemoStudy(inital) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <>
      <Parent a={a} b={b}/>
      <button onClick={() => setA(a+1)}>alter a</button>
      <button onClick={() => setB(b+1)}>alter b</button>
    </>
  )
}

export default MemoStudy

