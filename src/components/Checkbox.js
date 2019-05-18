import React, { Component } from "react";
import SelectionCreator from "./SelectionCreator";
import { Checkbox as IndividualCheckbox } from "material-ui";

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Checkbox = ({ index }) => <IndividualCheckbox disabled />;
    return <SelectionCreator ListMarker={Checkbox} />;
  }
}

export default Checkbox;
