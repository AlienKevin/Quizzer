import React, { Component } from "react";
import { TextField, List, ListItem, Typography } from "material-ui";
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

  render() {
    return (
      <List>
        {/* <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem> */}
        {this.state.options.map((option, index) => (
          <ListItem>
            <Typography
              className={this.classes.listNumber}
              variant="body2"
              color="textSecondary"
            >
              {index + 1 + "."}
            </Typography>
            <TextField placeholder={option} />
          </ListItem>
        ))}
        {
          <ListItem onClick={this.handleAddOption}>
            <TextField
              placeholder={"Add option"}
              InputProps={{
                readOnly: true
              }}
            />
          </ListItem>
        }
      </List>
    );
  }
}
export default withStyles(styles)(Dropdown);
