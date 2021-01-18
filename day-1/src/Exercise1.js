import React from "react";

function Hello() {
  //  [JSX]
  //  return <h2>Afayaivos a React</h2>;

  //  [Rreact.createElement]
  return React.createElement("h2", null, "Afayaivos a React");
}

export default function Exercise1() {
  //  [JSX]
  //  return (
  //    <>
  //      <h1>React first steps</h1>
  //      <Hello />
  //    </>
  //  );

  // [Rreact.createElement]
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "React first steps"),
    React.createElement(Hello, null)
  );
}
