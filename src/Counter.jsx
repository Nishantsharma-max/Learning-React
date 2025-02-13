import { useState } from "react"


export default function Counter(){
     let [count ,setcount] = useState(0)

     function countHandeler(){
          setcount(count+1)
     }
     return<button onClick={countHandeler} >count:{count}</button>
}