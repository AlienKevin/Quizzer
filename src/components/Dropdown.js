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
      options: ["Option 1"]
    };
    this.classes = props.classes;
  }

  handleAddOption = () => {
    this.setState(prevState => ({
      options: [...prevState.options, `Option ${prevState.options.length + 1}`]
    }));
  };

  handleCloseOptionButton = index => {
    this.setState(prevState => {
      // remove the options
      prevState.options.splice(index, 1);
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
          let dropdown = this.state.options.map((option, index) => (
            <ListItem>
              <ListNumber index={index + 1} />
              <TextField placeholder={option} />
              {this.state.options.length > 1 && (
                <IconButton
                  onClick={index => this.handleCloseOptionButton(index)}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </ListItem>
          ));
          dropdown.push(
            <ListItem onClick={this.handleAddOption}>
              <ListNumber index={this.state.options.length + 1} />
              <TextField
                placeholder={"Add option"}
                InputProps={{
                  readOnly: true
                }}
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
