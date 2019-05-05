import React, { Component } from "react";
import { TextField } from "material-ui";

class ShortAnswer extends Component {
  render() {
    return (
      <TextField
        style={{ marginTop: 0, display: "block" }}
        margin="normal"
        defaultValue="Short answer text"
        inputProps={{
          style: {
            marginTop: 15,
            color: "gray"
          },
          readOnly: true
        }}
      />
    );
  }
}
export default ShortAnswer;
