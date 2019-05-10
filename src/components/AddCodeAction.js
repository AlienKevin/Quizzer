import React, { Component } from "react";
import { Tooltip, IconButton } from "material-ui";
import CodeIcon from "material-ui-icons/Code";

class AddCodeAction extends Component {
  render() {
    return (
      <Tooltip title="Add Code">
        <IconButton>
          <CodeIcon />
        </IconButton>
      </Tooltip>
    );
  }
}

export default AddCodeAction;
