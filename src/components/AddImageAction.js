import React, { Component, Fragment } from "react";
import { IconButton, Dialog, TextField, Button } from "material-ui";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";
import Tooltip from "material-ui/Tooltip";
import ImageIcon from "material-ui-icons/Image";

class AddImageAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      imageUrl: ""
    };
    this.onAddImage = props.onAddImage;
  }

  updateValue = event => {
    const target = event.target;
    this.setState({
      [target.id]: target.value
    });
  };

  handleClose = callback => {
    this.setState({
      open: false
    });
    callback();
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <Fragment>
        <Tooltip title="Add Image">
          <IconButton onClick={this.handleOpen}>
            <ImageIcon />
          </IconButton>
        </Tooltip>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Image</DialogTitle>
          <DialogContent>
            <DialogContentText>Paste in image url here:</DialogContentText>
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
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() =>
                this.handleClose(() => {
                  this.onAddImage(this.state.imageUrl);
                })
              }
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

export default AddImageAction;
