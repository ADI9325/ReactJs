
import {useState} from 'react'


function App() {
  let [counter , setCounter] =useState(10);
  // let counter = 0;
  const addValue=()=>{
    if (counter<20) {
      
    
    console.log(counter+1);
    setCounter(counter+1)}


  }
  const removeValue=()=>{
    if(counter>0){
    console.log(counter-1);
    setCounter(counter-1)}
  }
  return (
   <div>
    <h1>This is my first project of React using Hooks</h1>
    <h3>This is the counter value : {counter}</h3>
    <button onClick={addValue}>ADD</button>
    <button onClick={removeValue}>REMOVE</button>
    <h3>Footer :  {counter} </h3>

   </div>
  );
}

export default App;
