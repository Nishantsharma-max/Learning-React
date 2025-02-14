
import { useState } from "react"

export default function Likebtn(){
     let [classN,SetclassN]=useState("fa-regular fa-heart")
     let clicked = ()=>{
          if(classN=="fa-regular fa-heart") {
               return SetclassN("fa-solid fa-heart")
          }
          else{
               return SetclassN("fa-regular fa-heart")
          }
     }

     return(
          <div>
               <p onClick={clicked}><i style={{fontSize:"100px"}} className={classN} ></i></p>
          </div>
     )
}