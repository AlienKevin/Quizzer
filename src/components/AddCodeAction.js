import React, { Component, Fragment } from "react";
import { Tooltip, IconButton } from "material-ui";
import CodeIcon from "material-ui-icons/Code";
import { Dialog, TextField, Button } from "material-ui";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";

class AddCodeAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOpen: false
    };
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
        >
          <DialogTitle id="form-dialog-title">Add Code</DialogTitle>
          <DialogContent>
            <DialogContentText>Select the language: </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="imageUrl"
              placeholder="url"
              type="url"
              value={this.state.imageUrl}
              onChange={this.updateValue}
              fullWidth
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

export default AddCodeAction;
