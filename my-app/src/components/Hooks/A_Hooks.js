import { RefStudy1, RefStudy2 } from "./ref_study";
import MemoStudy from "./memo_study";
import StateStudy1 from "./state_study";

export default function Hooks() {
  return (
    <>
      <MemoStudy />
      <StateStudy1 />
      <RefStudy1 />
    </>
  );
}