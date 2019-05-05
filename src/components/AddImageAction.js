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
      inputOpen: false,
      alertOpen: false,
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
        <Tooltip title="Add Image">
          <IconButton onClick={() => this.handleOpen("input")}>
            <ImageIcon />
          </IconButton>
        </Tooltip>

        <Dialog
          id="input"
          open={this.state.inputOpen}
          onClose={() => this.handleClose("input")}
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
            <Button onClick={() => this.handleClose("input")} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.handleClose("input");
                testImage(this.state.imageUrl)
                  .then(() => {
                    this.onAddImage(this.state.imageUrl);
                  })
                  .catch(error => {
                    this.setState({
                      alertOpen: true
                    });
                  });
              }}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>

        {/* Alert box for invalid image url*/}
        <Dialog
          id="alert"
          open={this.state.alertOpen}
          onClose={() => this.handleClose("alert")}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Invalid Image Url
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.handleClose("alert");
                this.handleOpen("input");
              }}
              color="primary"
            >
              Change Url
            </Button>
            <Button
              onClick={() => this.handleClose("alert")}
              color="primary"
              autoFocus
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

function testImage(url, timeoutT) {
  return new Promise(function(resolve, reject) {
    var timeout = timeoutT || 2000;
    var timer,
      img = new Image();
    img.onerror = img.onabort = function() {
      clearTimeout(timer);
      reject("error");
    };
    img.onload = function() {
      clearTimeout(timer);
      resolve("success");
    };
    timer = setTimeout(function() {
      // reset .src to invalid URL so it stops previous
      // loading, but doens't trigger new load
      img.src = "//!!!!/noexist.jpg";
      reject("timeout");
    }, timeout);
    img.src = url;
  });
}

export default AddImageAction;
