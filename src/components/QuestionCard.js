import React, { Component } from "react";
import { Card } from "material-ui";
import { CardContent, TextField } from "material-ui";
import { withStyles } from "material-ui/styles";
import QuestionActions from "./QuestionActions";
import QuestionImage from "./QuestionImage";
import QuestionTypeSelector from "./QuestionTypeSelector";
import ShortAnswer from "./ShortAnswer";

const styles = () => ({
  cardContent: {
    paddingTop: 0
  },
  card: {
    marginTop: 10
  }
});

class QuestionCard extends Component {
  constructor(props) {
    super();
    this.state = {
      question: "",
      answer: "",
      imageUrl: ""
    };
    this.classes = props.classes;
  }

  handleDeleteButton = () => {
    this.setState({
      question: "",
      answer: "",
      imageUrl: ""
    });
  };

  handleAddImageButton = imageUrl => {
    console.log(imageUrl);
    this.setState({
      imageUrl: imageUrl
    });
  };

  updateValue = event => {
    const target = event.target;
    this.setState({
      [target.id]: target.value
    });
  };

  render() {
    return (
      <Card className={this.classes.card}>
        <CardContent className={this.classes.cardContent}>
          <TextField
            id="question"
            label="Question"
            margin="normal"
            value={this.state.question}
            onChange={this.updateValue}
            inputProps={{
              style: { fontSize: 30 }
            }}
            InputLabelProps={{ style: { fontSize: 30 } }}
          />

          <QuestionTypeSelector className={this.classes.right} />

          <QuestionImage imageUrl={this.state.imageUrl} />

          <ShortAnswer />

          <TextField
            id="answer"
            label="Answer"
            value={this.state.answer}
            onChange={this.updateValue}
          />
        </CardContent>
        <QuestionActions
          onDelete={this.handleDeleteButton}
          onAddImage={this.handleAddImageButton}
        />
      </Card>
    );
  }
}

export default withStyles(styles)(QuestionCard);
