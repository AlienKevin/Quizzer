import React, { Component } from "react";
import { TextField, List, ListItem, Typography, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  listNumber: {
    marginRight: theme.spacing.unit
  }
});

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      options: [""]
    };
    this.classes = props.classes;
  }

  handleAddOption = () => {
    this.setState(prevState => ({
      options: [...prevState.options, ""]
    }));
  };

  handleCloseOptionButton = index => {
    this.setState(prevState => {
      // remove the options
      prevState.options.splice(index, 1);
      console.log(prevState.options);
      return {
        options: prevState.options
      };
    });
  };

  updateOptions = event => {
    const target = event.target;
    const index = target.id;
    this.setState(prevState => {
      prevState.options[index] = target.value;
      console.log(prevState.options);
      return {
        options: prevState.options
      };
    });
  };

  render() {
    return (
      <List>
        {(() => {
          console.log("dropdowning...");
          const ListNumber = ({ index }) => (
            <Typography
              className={this.classes.listNumber}
              variant="body2"
              color="textSecondary"
            >
              {index + "."}
            </Typography>
          );
          console.log(this.state.options);
          let dropdown = this.state.options.map((option, index) => {
            console.log("option: " + option);
            return (
              <ListItem>
                <ListNumber index={index + 1} />
                <TextField
                  id={index + ""}
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={this.updateOptions}
                />
                {this.state.options.length > 1 && (
                  <IconButton
                    onClick={() => this.handleCloseOptionButton(index)}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </ListItem>
            );
          });
          dropdown.push(
            <ListItem onClick={this.handleAddOption}>
              <ListNumber index={this.state.options.length + 1} />
              <TextField
                placeholder={"Add option"}
                InputProps={{
                  readOnly: true
                }}
                value=""
              />
            </ListItem>
          );
          return dropdown;
        })()}
      </List>
    );
  }
}
export default withStyles(styles)(Dropdown);
