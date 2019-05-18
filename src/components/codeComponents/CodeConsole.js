import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

function CodeConsole(props) {
  console.log("CodeConsole props: ", props);
  const stdout = props.output.stdout;
  // console.log("stdout: " + stdout);
  const stderr = props.output.stderr;
  const error = props.output.error;

  let value =
    (stdout ? stdout + "\n" : "") +
    (stderr ? stderr + "\n" : "") +
    (error ? error : "");
  return <CodeMirror value={value} />;
}

export default CodeConsole;
