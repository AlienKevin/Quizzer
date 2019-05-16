import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

function CodeConsole(props) {
  console.log("CodeConsole props: ", props);
  const stdout = props.output.stdout;
  console.log("stdout: " + stdout);
  return <CodeMirror value={stdout} />;
}

export default CodeConsole;
