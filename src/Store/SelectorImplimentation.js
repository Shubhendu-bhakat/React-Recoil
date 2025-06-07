import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { CounterAtom } from "./Store/atoms";
import { EvenSelector } from "./Store/Selectors";

function App(){
  return (
    <div>
      <RecoilRoot>
        <Buttons/>
        <Value/>
        <EvenAndOdd/>
      </RecoilRoot>
    </div>
  )
}
function Buttons(){
  const setCount = useSetRecoilState(CounterAtom);
  function incress(){
    setCount(prev => prev +2);
  }
  function decress(){
    setCount(prev => prev -1);
  }
  return(
    <div>
      <button onClick={incress}>Incress</button>
      <button onClick={decress}>Decress</button>
    </div>
  )
}
function Value(){
  const value = useRecoilValue(CounterAtom); 
  return(
    <div>
      {value}
    </div>
  )
}
function EvenAndOdd(){
  //gettting the selector and condtionally rendering it 
  const isEvevn = useRecoilValue(EvenSelector);
  return(
    <div>
      {isEvevn?"Even":"Odd"}
    </div>
  )
}
export default App;
