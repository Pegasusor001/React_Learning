import React from "react";
import { ReactDOM } from "react";
import {
  ClassComponent_WithConstructor,
  ClassComponent_WithoutConstructor,
  ClassComponent_Input,
} from "./ClassComponent";
import { Ref } from "./Ref";
import { LifeCycle, ShouldComponentUpdate } from "./LifeCycle";

export class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <ClassComponent_WithConstructor />
        <ClassComponent_WithoutConstructor />
        <ClassComponent_Input />
        <Ref />
        <LifeCycle />
        <ShouldComponentUpdate />
      </>
    );
  }
}
