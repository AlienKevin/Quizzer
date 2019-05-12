import React, { Component } from "react";
import { Card } from "material-ui";
import { CardContent, TextField } from "material-ui";
import { withStyles } from "material-ui/styles";
import QuestionActions from "./QuestionActions";
import QuestionImage from "./QuestionImage";
import QuestionCode from "./QuestionCode";
import QuestionTypeSelector from "./QuestionTypeSelector";
import ShortAnswer from "./ShortAnswer";
import Paragraph from "./Paragraph";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import MultipleChoice from "./MultipleChoice";

const styles = () => ({
  cardContent: {
    paddingTop: 0
  },
  card: {
    marginTop: 10
  }
});

const defaultState = {
  question: "",
  answer: "",
  imageUrl: "",
  codeContent: null,
  codeLanguage: "javascript/javascript",
  type: "multipleChoice"
};

class QuestionCard extends Component {
  constructor(props) {
    super();
    this.state = Object.assign({}, defaultState);
    this.classes = props.classes;
  }

  handleDeleteButton = () => {
    this.setState(Object.assign({}, defaultState));
  };

  handleAddImageButton = imageUrl => {
    console.log(imageUrl);
    this.setState({
      imageUrl: imageUrl
    });
  };

  handleAddCodeButton = codeLanguage => {
    console.log("language: " + codeLanguage);
    this.setState({
      codeLanguage: codeLanguage,
      codeContent: ""
    });
  };

  updateValue = event => {
    const target = event.target;
    this.setState({
      [target.id]: target.value
    });
  };

  handleTypeChange = newType => {
    this.setState({
      type: newType
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
            fullWidth={true}
          />

          {this.state.imageUrl && (
            <QuestionImage imageUrl={this.state.imageUrl} />
          )}

          {this.state.codeContent !== null && (
            <QuestionCode
              codeContent={this.state.codeContent}
              codeLanguage={this.state.codeLanguage}
            />
          )}

          <QuestionTypeSelector
            defaultType={defaultState.type}
            onTypeChange={this.handleTypeChange}
          />

          {
            {
              shortAnswer: <ShortAnswer />,
              paragraph: <Paragraph />,
              dropdown: <Dropdown />,
              checkbox: <Checkbox />,
              multipleChoice: <MultipleChoice />
            }[this.state.type]
          }

          <TextField
            id="answer"
            label="Answer"
            value={this.state.answer}
            onChange={this.updateValue}
            fullWidth={true}
          />
        </CardContent>
        <QuestionActions
          onDelete={this.handleDeleteButton}
          onAddImage={this.handleAddImageButton}
          onAddCode={this.handleAddCodeButton}
        />
      </Card>
    );
  }
}

export default withStyles(styles)(QuestionCard);
