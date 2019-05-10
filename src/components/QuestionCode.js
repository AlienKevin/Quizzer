import React, { Component } from "react";
import Codemirror from "react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";

const defaults = {
  markdown:
    "# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)",
  javascript:
    'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

class QuestionCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaults.markdown,
      readOnly: false,
      mode: "markdown"
    };
  }
  updateCode = newCode => {
    this.setState({
      code: newCode
    });
  };
  changeMode = e => {
    var mode = e.target.value;
    this.setState({
      mode: mode,
      code: defaults[mode]
    });
  };
  toggleReadOnly = () => {
    this.setState(
      {
        readOnly: !this.state.readOnly
      },
      () => this.refs.editor.focus()
    );
  };
  render() {
    var options = {
      lineNumbers: true,
      readOnly: this.state.readOnly,
      mode: this.state.mode
    };
    return (
      <Codemirror
        ref="editor"
        value={this.state.code}
        onChange={this.updateCode}
        options={options}
        autoFocus={true}
      />
    );
  }
}

export default QuestionCode;
