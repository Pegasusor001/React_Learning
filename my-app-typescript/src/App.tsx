import React from "react";

import { BasicStudy1 } from "./component/Basic/index";
import { StateStudy1 } from "./component/State/index";
import { TodoList } from "./component/Ref/index";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <BasicStudy1 text="hello" obj={{ firstname: "Lun", lastname: "Ji" }} /> */}
      {/* <StateStudy1 /> */}
      <TodoList />
    </div>
  );
};

export default App;
