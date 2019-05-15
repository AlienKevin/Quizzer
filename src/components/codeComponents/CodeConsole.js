import React, { Component } from "react";
import Codemirror from "react-codemirror";

class CodeConsole extends Component {
  constructor(props) {
    super(props);
    this.onRun = props.onRun;
  }

  render() {
    var options = {
      readOnly: true
    };
    return (
      <Codemirror
        // value={this.state.codeContent}
        // onChange={this.updateCode}
        options={options}
        // autoFocus={false}
        // className={this.classes.code}
      />
    );
  }
}

export default CodeConsole;
