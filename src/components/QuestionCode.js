import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Codemirror from "react-codemirror";
import "codemirror/lib/codemirror.css";

const defaults = {
  markdown: "# Type Markdown here",
  javascript: "console.log('hello world')"
};

const styles = {
  code: {
    marginTop: "1em",
    marginBottom: "1em"
  }
};

async function loadModule(url) {
  await import(url);
  return;
}

class QuestionCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeContent: props.codeContent,
      readOnly: false,
      codeLanguage: props.codeLanguage
    };
    loadModule(
      "codemirror/mode/" + props.codeLanguage + "/" + props.codeLanguage
    );
    this.classes = props.classes;
  }
  updateCode = newCode => {
    this.setState({
      codeContent: newCode
    });
  };
  changeMode = e => {
    var mode = e.target.value;
    this.setState({
      mode: mode,
      codeContent: defaults[mode]
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
      mode: this.state.codeLanguage
    };
    return (
      this.state.codeContent !== null && (
        <Codemirror
          ref="editor"
          value={this.state.codeContent}
          onChange={this.updateCode}
          options={options}
          autoFocus={false}
          className={this.classes.code}
        />
      )
    );
  }
}

export default withStyles(styles)(QuestionCode);
