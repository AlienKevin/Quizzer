import React from "react";
import { Paper } from "@material-ui/core";
import TitleCard from "./TitleCard";
import QuestionCard from "./QuestionCard";

function QuizMaker(props) {
  return (
    <Paper>
      <TitleCard />
      <QuestionCard />
    </Paper>
  );
}

export default QuizMaker;
