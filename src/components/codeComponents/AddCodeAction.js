import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip, IconButton } from "@material-ui/core";
import CodeIcon from "material-ui-icons/Code";
import { Dialog, Button } from "@material-ui/core";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import CodeLanguageSelector from "./CodeLanguageSelector";

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

  handleLanguageSelect = newLanguage => {
    this.setState({
      codeLanguage: newLanguage
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

            <CodeLanguageSelector
              handleLanguageSelect={this.handleLanguageSelect}
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
