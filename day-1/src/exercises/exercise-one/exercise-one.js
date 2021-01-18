import React from "react";

function Hello() {
  return React.createElement("h2", null, "Afayaivos a React");
}

export default function ExerciseOne() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "React first steps"),
    React.createElement(Hello, null)
  );
}
