//here i have explained the use of the useState(()=>{},[]) 
//[] - dependency array  is a dependecny that monitored by the useEffect ,i.e it only renders 

import { useEffect } from "react";

//a sepecific set of element when it chnages 
useEffect(()=>{
  
},[])

//if not anything mentioned in dependecy array then it will only render the element in the 
//mounted time , and perform cleanup 