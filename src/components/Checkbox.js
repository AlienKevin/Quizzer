import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import SelectionCreator from "./SelectionCreator";
import { Checkbox as IndividualCheckbox } from "material-ui";

const styles = theme => ({
  ListNumber: {
    marginRight: theme.spacing.unit
  }
});

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
  }
  render() {
    const Checkbox = ({ index }) => <IndividualCheckbox disabled />;
    return <SelectionCreator ListMarker={withStyles(styles)(Checkbox)} />;
  }
}

export default Checkbox;
