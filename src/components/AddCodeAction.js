import React, { Component, Fragment } from "react";
import { withStyles } from "material-ui/styles";
import { Tooltip, IconButton } from "material-ui";
import CodeIcon from "material-ui-icons/Code";
import { Dialog, TextField, Button } from "material-ui";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";
import Select from "react-select";
import codeLanguageList from "./codeMirrorLanguages.json";

const codeLanguages = Object.values(codeLanguageList)
  .map(mode =>
    mode.map(languageName => ({
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

class AddCodeAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOpen: false,
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
    this.setState({ codeLanguage: selectedOption });
    console.log(`Option selected:`, selectedOption);
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
              value={this.state.codeLanguage}
              onChange={this.handleSelect}
              options={codeLanguages}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose("input")} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.handleClose("input");
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
