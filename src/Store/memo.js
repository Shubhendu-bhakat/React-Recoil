//Memo implimentation

import { useState, memo } from "react";

function App(){

  return(
    <>
    <CountValue />
    </>
  )
}
  const CountValue = memo(function CountValue(){
   const [count , setCount ] = useState(0);
  return (
    <div>
      <Incress/>
      <Decress/>
    </div>
  )
})

 const Incress = memo(function Incress(){
  return (
    <div>
      <button > NO chnage in count Incress</button>
    </div>
  )
})
 const Decress = memo(function Decress(){
  return (
    <div>
      <button>No chnage in Decress Count </button>
    </div>
  )
 })
export default App;
