import React from "react";
import "./App.css";

import ExerciseOne from "./exercises/exercise-one/exercise-one";
import ExerciseTwo from "./exercises/exercise-two/exercise-two";

function App() {
  return (
    <div class="exercises">
      <h1 class="exercises__title">Execise 1</h1>
      <div class="exercises__content">
        <ExerciseOne />
      </div>
      <hr />
      <h1 class="exercises__title">Execise 2</h1>
      <div class="exercises__content">
        <ExerciseTwo />
      </div>
    </div>
  );
}

export default App;
