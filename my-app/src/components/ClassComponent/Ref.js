import React from "react";
import { ReactDOM } from "react";

// 使用 ref 来获得 uncontrolled input 中的 value，不需要使用常用的 onChange，value 来获得 input 中的 value
// Ref 会指向 DOM node，value 储存在 ref.current中
// 使用 input 中的 ref property， 并将它 pass 给 inputRef 
export class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(this.inputRef.current.value )
  }  

  render() {
    return (
      <>
        <div>
          <h2>Use Ref to refer to an Uncontrolled Input</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input ref={this.inputRef}></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
