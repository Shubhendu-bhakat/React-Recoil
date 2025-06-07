import { selector } from "recoil";
import { CounterAtom } from "./atoms";
//this selector is selected to CounterAtom which re-renders only when the Atom changes 
export  const EvenSelector = selector({
    key:"evenSelector",
    get:({get})=>{
        const currentCout = get(CounterAtom);
        return currentCout%2==0;
    }
}) 