import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Footer, Header, QuizMaker } from "./components";
import "./styles.css";

function App() {
  return (
    <Fragment>
      <Header />
      <QuizMaker />
      <Footer />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
