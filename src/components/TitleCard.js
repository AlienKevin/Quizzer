import React, { Fragment } from "react";
import { TextField } from "material-ui";

function TitleCard(props) {
  return (
    <div style={{ marginLeft: 15 }}>
      <TextField
        label="Quiz Title"
        margin="normal"
        inputProps={{ style: { fontSize: 40 } }}
        InputLabelProps={{ style: { fontSize: 40 } }}
      />
      <TextField
        label="Quiz Description"
        style={{ marginTop: 0 }}
        margin="dense"
        inputProps={{
          style: {
            color: "gray"
          }
        }}
      />
    </div>
  );
}
export default TitleCard;
