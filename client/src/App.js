import { useState, useRef, useEffect } from 'react'
import './App.css';

//The useRef Hook allows you to persist values between renders.
//It can be used to store a mutable value that does not cause a re-render when updated.
//It can be used to access a DOM element directly.

function App() {

  const [inputValue, setInputValue] = useState("")
  const count = useRef(0) //same as: const count = {current: 0}
  const inputElement = useRef()

  const focusElement = () => {
    inputElement.current.focus()
  }

  useEffect(() => {
    count.current = count.current + 1
    //useRef() only returns one item. It returns an Object called current.
  })

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={inputValue} //because input has value, it triggers the re render
          // just used to update state which triggers a re render
          onChange={(e) => setInputValue(e.target.value)} />
        <h3>Render Count: {count.current}</h3>
      </div>
      <div>
        {/* In React, we can add a ref attribute to an element to access it directly in the DOM. */}
        <input type="text" ref={inputElement} /* attaching itself the useRef variable inputElement */ />
        <button onClick={focusElement}>Focus on Element</button>
      </div>
    </div>
  );
}

export default App;
