import "./exercise-two.css";

function Person({ name, age, children }) {
  return (
    <div class="person">
      <p>
        I'm a person and my name is {name} and my age is {age}.
      </p>
      {children && <p>Some extra info about me: {children}</p>}
    </div>
  );
}

export default function ExerciseTwo() {
  return (
    <div class="person__list">
      <h1>First steps app</h1>
      <Person name="Josechu Leton" age="33" />
      <Person name="Encarna Vale" age="22" />
      <Person name="Lola Mento" age="22">
        I'm an Open Arms volunteer
      </Person>
    </div>
  );
}
