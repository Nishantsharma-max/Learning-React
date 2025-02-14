import Elementbox from "./Elementbox";
import { useState } from "react";
export default function Gamebox(){
     const [state,setstate]=useState("X")
     function display(event){
           let el=event.target;
           if (!el.textContent){
               if (state=="X"){
                    el.textContent=state
                    return setstate("O")
               }else{
                    el.textContent=state
                    return setstate("X")
               }
          }
     }         
     return(
          <div onClick={display} style={{display:"flex",width:"300px",flexWrap:"wrap"}} >
               <Elementbox classn="11" />
               <Elementbox classn="12"/>
               <Elementbox classn="13" />
               <Elementbox classn="21" />
               <Elementbox classn="22" />
               <Elementbox classn="23" />
               <Elementbox classn="31" />
               <Elementbox classn="32" />
               <Elementbox classn="33" />
          </div>
     )

}
