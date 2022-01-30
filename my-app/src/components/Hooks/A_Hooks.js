import { RefStudy1, RefStudy2 } from "./ref";
import MemoStudy from "./memo";
import EffectStudy1 from "./effect";
import StateStudy1 from './state'

// Rules of Hooks: 
// 1. Put Hooks at top of a component, No Loops, Conditions, nested Functions
// 2. Only Call from functional compoent 
// 3. name with use

export default function Hooks() {
  return (
    <>
      <MemoStudy />
      <EffectStudy1 />
      <RefStudy1 />
      <StateStudy1 />
    </>
  );
}