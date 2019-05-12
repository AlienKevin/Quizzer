import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Codemirror from "react-codemirror";

// basic codemirror css
import "codemirror/lib/codemirror.css";

// List of language modes for codemirror
import("codemirror/mode/clike/clike");
import("codemirror/mode/python/python");
// must load xml first before loading html
import("codemirror/mode/xml/xml");
import("codemirror/mode/css/css");
import("codemirror/mode/javascript/javascript");
import("codemirror/mode/htmlmixed/html");
import("codemirror/mode/sql/sql");

const styles = {
  code: {
    marginTop: "1em",
    marginBottom: "1em"
  }
};

async function loadModule(url) {
  console.log("loading module: " + url);
  try {
    // await import(url);
    // await import("codemirror/mode/clike/clike");
    // await import("codemirror/mode/javascript/javascript");
  } catch (error) {
    console.log(error);
  }
  console.log("finished loading module: " + url);
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
    console.log("props.codeContent: " + props.codeContent);
    console.log("props.codeLanguage: " + props.codeLanguage);
    // this.loadMode();
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
      codeContent: ""
    });
  };
  getMIMEType = () => {
    const mode = this.getMode();
    return (
      `text/${mode === "javascript" || mode === "htmlmixed" ? "" : "x-"}` +
      this.getLanguageName()
    );
  };

  getLanguageName = () => {
    return this.state.codeLanguage.substring(
      this.state.codeLanguage.indexOf("/") + 1
    );
  };

  getMode = () => {
    return this.state.codeLanguage.substring(
      0,
      this.state.codeLanguage.indexOf("/")
    );
  };

  loadMode = () => {
    const mode = this.getMode();
    const languageName = this.getLanguageName();
    switch (languageName) {
      case "html":
        loadModule("codemirror/mode/" + mode + "/" + languageName);
        break;
      default:
        loadModule("codemirror/mode/" + mode + "/" + mode);
    }
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
    console.log("render code mode: " + this.getMIMEType());
    var options = {
      lineNumbers: true,
      readOnly: this.state.readOnly,
      mode: this.getMIMEType()
    };
    // console.log("this.state.codeContent: ", this.state.codeContent);
    return (
      <Codemirror
        ref="editor"
        value={this.state.codeContent}
        onChange={this.updateCode}
        options={options}
        autoFocus={false}
        className={this.classes.code}
      />
    );
  }
}

export default withStyles(styles)(QuestionCode);
