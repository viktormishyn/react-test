import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [emotion, setEmotion] = useState("happy")
  // useState returns an array, where first item (corresponds to the first argument) is our state variable
  // and second is a function for updating the state
  const [secondary, setSecondary] = useState("tired")

  useEffect( () => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion])
  // useEffect takes 2 arguments: useState is going to watch the state values from the dependency array (2nd argument)
  // if the value changes, useEffect will call the sideffect function (1st argument)
  useEffect( () => {
    console.log(`It's ${secondary} around here!`)
  }, [secondary])


  return (
    <>
      <h1>Current emotions: {emotion}, {secondary}</h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <br/>
      <button onClick={() => setSecondary("crabby")}>Crabby</button>

    </>
  )
}

export default App;
