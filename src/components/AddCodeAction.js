import React, { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import { Tooltip, IconButton } from "material-ui";
import CodeIcon from "material-ui-icons/Code";
import { Dialog, Button } from "material-ui";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";
import Select from "react-select";
import codeLanguageList from "./codeMirrorLanguages.json";

// remove when dynamic import is working in QuestionCode
const workingModeList = [
  "xml",
  "css",
  "javascript",
  "htmlmixed",
  "sql",
  "python",
  "clike"
];

const codeLanguages = Object.entries(codeLanguageList)
  .filter(([mode, languageNames]) => {
    return workingModeList.indexOf(mode) >= 0;
  })
  .map(([mode, languageNames]) =>
    languageNames.map(languageName => ({
      label: languageName,
      value: languageName
    }))
  )
  .flat();

console.log(codeLanguages);

const styles = {
  dialog: {
    minHeight: "550px",
    maxHeight: "80vh"
  }
};

const codeLanguageSelectorStyles = styles => ({
  ...styles,
  fontFamily: "sans-serif"
});

const getLanguageMode = languageName => {
  let languageMode = undefined;
  Object.keys(codeLanguageList).forEach(mode => {
    // console.log(codeLanguageList[mode]);
    if (codeLanguageList[mode].indexOf(languageName) >= 0) {
      // console.log("find language mode!");
      languageMode = mode;
    }
  });
  return languageMode;
};

class AddCodeAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOpen: false,
      codeLanguageOption: null,
      codeLanguage: ""
    };
    this.classes = props.classes;
    this.onAddCode = props.onAddCode;
  }

  updateValue = event => {
    const target = event.target;
    this.setState({
      [target.id]: target.value
    });
  };

  handleClose = id => {
    this.setState({
      [id + "Open"]: false
    });
  };

  handleOpen = id => {
    this.setState({
      [id + "Open"]: true
    });
  };

  handleSelect = selectedOption => {
    console.log("selected option: ", selectedOption);
    const selectedLanguage = selectedOption.value;
    console.log("selectedLanguage: " + selectedLanguage);
    const languageMode = getLanguageMode(selectedLanguage);
    console.log("languageMode: " + languageMode);
    this.setState({
      codeLanguageOption: selectedOption,
      codeLanguage: languageMode + "/" + selectedLanguage
    });
  };

  render() {
    return (
      <Fragment>
        <Tooltip title="Add Code">
          <IconButton onClick={() => this.handleOpen("input")}>
            <CodeIcon />
          </IconButton>
        </Tooltip>
        <Dialog
          id="input"
          open={this.state.inputOpen}
          onClose={() => this.handleClose("input")}
          aria-labelledby="form-dialog-title"
          classes={{ paper: this.classes.dialog }}
        >
          <DialogTitle id="form-dialog-title">Add Code</DialogTitle>
          <DialogContent>
            <DialogContentText>Select the language: </DialogContentText>
            <Select
              value={this.state.codeLanguageOption}
              onChange={this.handleSelect}
              options={codeLanguages}
              styles={{
                input: codeLanguageSelectorStyles,
                placeholder: codeLanguageSelectorStyles,
                singleValue: codeLanguageSelectorStyles,
                option: codeLanguageSelectorStyles
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose("input")} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.handleClose("input");
                this.onAddCode(this.state.codeLanguage);
              }}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AddCodeAction);
