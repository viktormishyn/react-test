import './App.css';
import { useState } from "react"

function App() {
  const [emotion, setEmotion] = useState("happy")
  // useState returns an array, where first item (corresponds to the first argument) is our state variable
  // and second is a function for updating the state
  console.log(emotion)
  return (
    <>
      <h1>Current emotion: {emotion}</h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
    </>
  )
}

export default App;
