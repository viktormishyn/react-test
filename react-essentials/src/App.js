import './App.css';
import { useReducer } from "react"

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )
  // reducer takes in the current state and returns a new state.
  // we can use useReducer instead of hardcoding such behavior intho onChange events
  // first argument in useReducer hook - reducer function, second - initial state

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}

export default App;
