import { useState } from "react";
export default function Counter(){
     const [count,setcount]=useState(0)
     function countHandeler(){
          setcount((el)=>{
               return el+1
          })
     }
     return <button onClick={countHandeler} >count:{count}</button>
}



