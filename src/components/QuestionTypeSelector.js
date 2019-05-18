import React, { Component } from "react";
import { Select, MenuItem } from "material-ui";
import ShortAnswerIcon from "material-ui-icons/ShortText";
import MultipleChoiceIcon from "material-ui-icons/RadioButtonChecked";
import CheckboxIcon from "material-ui-icons/CheckBox";
import DropdownIcon from "material-ui-icons/ArrowDropDownCircle";
import SvgIcon from "material-ui/SvgIcon";
import { withStyles } from "material-ui/styles";

const styles = theme => {
  return {
    icon: {
      marginRight: theme.spacing.unit,
      marginLeft: theme.spacing.unit
    },
    select: {
      background: theme.palette.grey["200"]
    }
  };
};

function ParagraphIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        fill="#000000"
        d="M4,5H20V7H4V5M4,9H20V11H4V9M4,13H20V15H4V13M4,17H14V19H4V17Z"
      />
    </SvgIcon>
  );
}

class QuestionTypeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.defaultType
    };
    this.classes = props.classes;
    this.onTypeChange = props.onTypeChange;
  }

  handleSelect = event => {
    const target = event.target;
    const newType = target.value;
    let isTypeNew = true;
    this.setState(prevState => {
      if (prevState.type !== newType) {
        isTypeNew = false;
      }
      return {
        type: newType
      };
    });
    if (isTypeNew) {
      this.onTypeChange(newType);
    }
  };

  render() {
    return (
      <Select
        className={this.classes.select}
        value={this.state.type}
        onChange={this.handleSelect}
        inputProps={{
          name: "type"
        }}
      >
        <MenuItem value={"shortAnswer"} className={this.classes.menuItem}>
          <ShortAnswerIcon className={this.classes.icon} /> Short Answer
        </MenuItem>
        <MenuItem value={"paragraph"} className={this.classes.menuItem}>
          <ParagraphIcon className={this.classes.icon} />
          Paragraph
        </MenuItem>
        <MenuItem value={"multipleChoice"}>
          <MultipleChoiceIcon className={this.classes.icon} />
          Multiple Choice
        </MenuItem>
        <MenuItem value={"checkbox"}>
          <CheckboxIcon className={this.classes.icon} />
          Checkbox
        </MenuItem>
        <MenuItem value={"dropdown"}>
          <DropdownIcon className={this.classes.icon} />
          Dropdown
        </MenuItem>
      </Select>
    );
  }
}

export default withStyles(styles)(QuestionTypeSelector);
