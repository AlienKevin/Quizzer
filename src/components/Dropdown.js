import React, { Component } from "react";
import { Typography } from "material-ui";
import { withStyles } from "material-ui/styles";
import SelectionCreator from "./SelectionCreator";

const styles = theme => ({
  ListNumber: {
    marginRight: theme.spacing.unit
  }
});

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
  }
  render() {
    const ListNumber = ({ index }) => (
      <Typography variant="body2" color="textSecondary" className="ListNumber">
        {index + "."}
      </Typography>
    );
    return <SelectionCreator ListMarker={withStyles(styles)(ListNumber)} />;
  }
}

export default Dropdown;
