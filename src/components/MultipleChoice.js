import React, { Component } from "react";
import SelectionCreator from "./SelectionCreator";
import { RadioButtonUnchecked } from "material-ui-icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit
  }
});

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
  }
  render() {
    const Radio = ({ index }) => (
      <RadioButtonUnchecked className={this.classes.icon} />
    );
    console.log(this.classes);
    return <SelectionCreator ListMarker={Radio} />;
  }
}

export default withStyles(styles)(MultipleChoice);
