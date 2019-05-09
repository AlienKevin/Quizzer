import React, { Component } from "react";
import { TextField, List, ListItem, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";
import { withStyles } from "material-ui/styles";

const styles = theme => ({});

class SelectionCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      options: [""]
    };
    this.classes = props.classes;
    this.inputs = [];
  }

  handleAddOption = () => {
    this.setState(prevState => ({
      options: [...prevState.options, ""],
      selected: prevState.options.length
    }));
  };

  handleCloseOptionButton = index => {
    console.log("index closed: ", index);
    this.setState(prevState => {
      // remove the options
      prevState.options.splice(index, 1);
      console.log(prevState.options);
      const result = {
        options: prevState.options
      };
      return result;
    });
    this.inputs.pop();
    console.log("inputs: ", this.inputs);
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

  selectOption = index => {
    this.setState({
      selected: index
    });
    console.log("selectOption index: ", index);
    console.log(this.inputs);
    if (index < this.inputs.length && this.inputs[index]) {
      console.log("selectOption focusing on input " + index);
      console.log("selectOption input element: ", this.inputs[index]);
      this.inputs[index].focus();
    }
  };

  render() {
    return (
      <List>
        {(() => {
          // console.log(this.state.options);
          const ListMarker = this.props.ListMarker;
          let dropdown = this.state.options.map((option, index) => {
            // console.log("option: " + option);
            return (
              <ListItem key={index}>
                {/* <ListNumber index={index + 1} /> */}
                <ListMarker index={index + 1} />
                <TextField
                  id={index + ""}
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  InputProps={{
                    onFocus: () => {
                      this.setState({
                        selected: index
                      });
                    },
                    onKeyPress: event => {
                      // console.log(event.key);
                      if (event.key === "Enter") {
                        console.log("Enter key is pressed!");
                        console.log("keypress index: ", index);
                        console.log(
                          "this.state.options.length: ",
                          this.state.options.length
                        );
                        console.log("keypress selected: ", this.state.selected);
                        if (index >= this.state.options.length - 1) {
                          this.handleAddOption();
                        } else {
                          console.log("keypress index: ", index);
                          this.selectOption(index + 1);
                        }
                      }
                    }
                  }}
                  onChange={this.updateOptions}
                  inputRef={input => {
                    console.log("inputRef input: ", input);
                    input && this.inputs.push(input);
                    console.log("selected: ", this.state.selected);
                    console.log("inputRef index: ", index);
                    if (this.state.selected === index && input) {
                      console.log("input is being focused...");
                      input.focus();
                    }
                  }}
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
              <ListMarker index={this.state.options.length + 1} />
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
export default withStyles(styles)(SelectionCreator);
