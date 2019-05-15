import React, { Component } from "react";
import { CardActions, IconButton } from "material-ui";
import Tooltip from "material-ui/Tooltip";
import DeleteIcon from "material-ui-icons/Delete";
import PlayIcon from "material-ui-icons/PlayCircleFilled";
import AddImageAction from "./AddImageAction";
import AddCodeAction from "./codeComponents/AddCodeAction";

class QuestionActions extends Component {
  constructor(props) {
    super(props);
    this.onDelete = props.onDelete;
    this.onAddImage = props.onAddImage;
    this.onAddCode = props.onAddCode;
  }

  render() {
    return (
      <CardActions>
        <Tooltip title="Clear">
          <IconButton onClick={this.onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Add Video">
          <IconButton>
            <PlayIcon />
          </IconButton>
        </Tooltip>

        <AddImageAction onAddImage={this.onAddImage} />

        <AddCodeAction onAddCode={this.onAddCode} />
      </CardActions>
    );
  }
}

export default QuestionActions;
