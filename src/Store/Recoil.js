import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { CounterAtom } from "./Store/atoms"

function App(){
  return(
    <RecoilRoot>
      <Button1/>
      <Button2/>
      <br />
      <Value/>
    </RecoilRoot>
    
  )
}
function Value(){
  const counter = useRecoilValue(CounterAtom);
  return (
    <>
    Counter = {counter}
    </>
  )
}
function Button1(){
  const setCounter = useSetRecoilState(CounterAtom);
  function DecressCount(){
    setCounter(c => c-1);
  }
  return (
    <>
    <div>
      <button onClick={DecressCount} >Incress Count </button>
    </div>
    </>
  )
}
function Button2(){
  const setCounter = useSetRecoilState(CounterAtom);
  return (
    <>
    <div>
      <button onClick={()=>setCounter(prev =>prev+1)} >Decress Count </button>
    </div>
    </>
  )
}
export default App;