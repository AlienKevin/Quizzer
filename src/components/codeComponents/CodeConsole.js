import React from "react";

function CodeConsole(props) {
  console.log("CodeConsole props: ", props);
  const stdout = props.output.stdout;
  console.log("stdout: " + stdout);
  return <textarea rows="6" cols="40" value={stdout} readOnly={true} />;
}

export default CodeConsole;
