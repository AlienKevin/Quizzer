import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import { PlayArrow } from "material-ui-icons";

class CodeControl extends Component {
  constructor(props) {
    super(props);
    this.onRun = props.onRun;
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.onRun}>
          <PlayArrow />
        </IconButton>
      </div>
    );
  }
}

export default CodeControl;
