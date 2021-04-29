import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [emotion, setEmotion] = useState("happy")
  // useState returns an array, where first item (corresponds to the first argument) is our state variable
  // and second is a function for updating the state

  useEffect( () => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion])
  // useEffect takes 2 arguments: useState is going to watch the state values from the dependency array (2nd argument)
  // if the value changes, useEffect will call the sideffect function (1st argument)

  return (
    <>
      <h1>Current emotion: {emotion}</h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
    </>
  )
}

export default App;
