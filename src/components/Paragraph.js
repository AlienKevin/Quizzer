import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class Paragraph extends Component {
  render() {
    return (
      <TextField
        style={{ marginTop: 0, display: "block" }}
        margin="normal"
        defaultValue="Paragraph text"
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
export default Paragraph;
