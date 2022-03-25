import React, {useState} from 'react';
import './App';
import './index.css'


const App = () => {
  const [input,result]=useState("");

  const display = (event) => {
    result(input.concat(event.target.value))
  }
  
  const clear = () => {
    result("");
  }

  const solution = () => {
    result(eval(input).toString())
  }
  
  return (
    <div className="main_div">
        <br />
        <h1>Calculator</h1>
        <br />
        <div className="center_div">
            <input className="input" type="text" placeholder="0" id="answer" value={input} />
            <input className="button" type="button" value="7" onClick={display} />
            <input className="button" type="button" value="8" onClick={display} />
            <input className="button" type="button" value="9" onClick={display} />
            <input className="button" type="button" value="/" onClick={display} />
            <input className="button" type="button" value="4" onClick={display} />
            <input className="button" type="button" value="5" onClick={display} />
            <input className="button" type="button" value="6" onClick={display} />
            <input className="button" type="button" value="*" onClick={display} />
            <input className="button" type="button" value="1" onClick={display} />
            <input className="button" type="button" value="2" onClick={display} />
            <input className="button" type="button" value="3" onClick={display} />
            <input className="button" type="button" value="-" onClick={display} />
            <input className="button" type="button" value="%" onClick={display} />
            <input className="button" type="button" value="0" onClick={display} />
            <input className="button" type="button" value="." onClick={display} />
            <input className="button" type="button" value="+" onClick={display} />
            
            <input className="button button1" type="button" value="Clear" onClick={clear} />
            <input className="button button2" type="button" value="=" onClick={solution} /> 
        </div>
    </div>
  )
}


export default App