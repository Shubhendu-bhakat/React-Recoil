//context API example 

import { useState, useContext ,createContext } from "react";
const context = createContext();
function ContextWrap({children}){
    const [count , setCount ] = useState(0);
     return <context.Provider value={{count :count,setCount :setCount}}>
      {children}
       </context.Provider>
}

function App(){
  return (
    <div>
      <ContextWrap>
        <Button1 />
        <Button2 />
        <br />
        <Value/>
      </ContextWrap>
    </div>
  )
}

function Value(){
   const {count } = useContext(context);
   return (
    <>
    <div>
      {count}
    </div>
    </>
   )

}

function Button1(){
   const {count , setCount} = useContext(context);
  return(
    <>
    <button onClick={()=>setCount(count +1)}>Incress</button>
    </>
  )
}

function Button2(){
  const {count , setCount} = useContext(context);
  return(
    <button onClick={()=>setCount(count -1)}>Decress</button>
  )
}


export default App;