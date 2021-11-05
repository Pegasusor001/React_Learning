import React from "react";
import "./App.css";

import { BasicStudy1 } from "./component/Basic/index";
import { StateStudy1 } from "./component/State/index";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <BasicStudy1 text="hello" obj={{ firstname: "Lun", lastname: "Ji" }} /> */}
      <StateStudy1 />
    </div>
  );
};

export default App;
