import { RefStudy1, RefStudy2 } from "./ref";
import MemoStudy from "./memo";
import {EffectStudy1, EffectStudy2} from "./effect";
import StateStudy1 from './state'
import { ReducerStudy1, ReducerStudy2 } from "./reducer";
import { ContextLevel1 } from "./context";

// Rules of Hooks: 
// 1. Put Hooks at top of a component, No Loops, Conditions, nested Functions
// 2. Only Call from functional compoent 
// 3. name with use

export default function Hooks() {
  return (
    <>
      <MemoStudy />
      <EffectStudy1 />
      <EffectStudy2 />
      <RefStudy1 />
      <RefStudy2 />
      <StateStudy1 />
      <ReducerStudy1 />
      <ReducerStudy2 />
      <ContextLevel1 />
    </>
  );
}