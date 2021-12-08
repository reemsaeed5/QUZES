
/* 2- create a functional react component that has a state "insideInput", a state "changeCounter", and a state "number". then add/do the following:
    a- add an input and make it change the "insideInput" state only when you press enter.
    b- add a button that (when clicked) will add 1 to changeCounter and have it rendered above the button
    c- generate a random number to be put inside the number and render it whenever changeCounter is changed
  */

/*       write your code her      */

import React,{useState} from 'react'
  export default function Num2() {
   const [insideInput, setinsideInput] = useState();
   const [changeCounter, setchangeCounter] = useState();
   const [number, setnumber] = useState();
     return (
        <div>
          <form>
      <label>Enter her:
        <input type="text" onChange={(setinsideInput)} />
      </label>
    </form>
      <p>You clicked 
        {count} times</p>
      <button onClick={() => setchangeCounter(count + 1)}>
        Click
      </button>
        </div>
     )
  }






