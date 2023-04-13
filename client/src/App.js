import { useState, useRef, useEffect } from 'react'
import './App.css';

//The useRef Hook allows you to persist values between renders.
//It can be used to store a mutable value that does not cause a re-render when updated.
//It can be used to access a DOM element directly.

function App() {

  
  // *********************************FOCUS ELEMENT**********************************  
  
  const [inputValue, setInputValue] = useState("")
  
  const focusElement = () => {
    inputElement.current.focus()
  }
  
  // *********************************RENDER COUNT**********************************  

  const count = useRef(0) //same as: const count = {current: 0} see input ref attribute #1
  const inputElement = useRef()
  
  useEffect(() => {
    count.current = count.current + 1
  })
  
// *********************************TOGGLE HIDE**********************************  
  
  const hideElement = useRef()

  const hideHandler = () => {
    let shortHandHide = hideElement.current.style
    console.log("This is the ref: ", hideElement.current.style)
    console.log("This is the variable holding ref style: ", shortHandHide)
    if(shortHandHide.display === '' || shortHandHide.display === 'block'){
      shortHandHide.display = 'none'
    }
    else{
      shortHandHide.display = 'block'
    }
  }

// *********************************STOPWATCH**********************************  

  const [counter, setCounter] = useState(0)
  const counterRef = useRef(0)
  const timer = useRef() //p tag ref attribute #4

  useEffect(() => {
    timer.current = setInterval(() => {
      counterRef.current += 1
      setCounter(counterRef.current)
    }, 1000)
    return () => clearInterval(timer.current) //this is a clean up function
  }, [])


  return (
    <div className="App">

      {/* COUNTING WITH USEREF() */}
      {/* because input has value, it triggers the re render just used to update state which triggers a re render */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <h3>Render Count: {count.current}</h3>
      </div>
      <hr />

      {/* MANIPULATE ELEMENT FROM DOM */}
      {/* In React, we can add a ref attribute to an element to access it directly in the DOM. */}
      <div>
        <input type="text" ref={inputElement} /* attaching itself the useRef variable inputElement */ />
        <button onClick={focusElement}>Focus on Element</button>
      </div>
      <hr />

      {/* HIDE ELEMENT */}
      {/* useRef works almost exactly like document.querySelector or document.getElementById, but it uses React strengths */}
      <div>
        <button onClick={hideHandler}>Hide Content</button>
        <p ref={hideElement}>Hide this</p>
      </div>

      {/* TIMER/STOPWATCH */}
      {/* using a useEffect to count with a callback setTimeout to create a timer by accessing DOM element */}
      <div>
        <p ref={timer}>{counter}</p>
      </div>

    </div>
  );
}

export default App;
