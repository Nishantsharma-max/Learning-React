import Elementbox from "./Elementbox";
import { useState } from "react";
// let arrforx=[]
// let arrfory=[]

// function sumchecker(arrof3,forwhat){
//      let sum=arrof3.reduce((ele,acc)=>{return ele+acc})
//           console.log(sum)
//           if (sum==36 || sum==66  || sum==96 ||
//           sum==69 || sum==63){
//                console.log(`${forwhat} win`)
//                return true
//           }else{
//                return false
//           }

// }

// function arrbecome4(arrof4,arrtype){
//      let last=arrof4.pop()
//           let sfirst=arrof4.splice(0,1,last)
//           let first=sfirst.pop()
//           let value1=sumchecker(arrof4,arrtype)
//           if (!value1){
//                let Smiddle=arrof4.splice(1,1,first)
//                let middle=Smiddle.pop()
//                let value2=sumchecker(arrof4,arrtype)
//                if(!value2){
//                     arrof4.splice(2,1,middle)
//                     sumchecker(arrof4,arrtype)
//                }
               
//           }

// }

// function checkforx(data){
//      let datatonum=Number(data)
//      arrforx.push(datatonum)
//      if(arrforx.length==3){
//           sumchecker(arrforx,"X")
//      }else if(arrforx.length==4) {
//           arrbecome4(arrforx,"X")
//      }else if(arrforx.length==5){
//           console.log("meo ")
//      }
// }

// function checkfory(data){
//      let datatonum=Number(data)
//      arrfory.push(datatonum)
//      if(arrfory.length==3){
//           sumchecker(arrfory,"Y")
//      }else if(arrfory.length==4) {
//           arrbecome4(arrfory,"Y")
//      }
// }
export default function Gamebox(){ 
     const [state,setstate]=useState("X")
     function display(event){
           let el=event.target;
           if (!el.textContent){
               if (state=="X"){
                    el.textContent=state
                    console.log(`X${el.className}`)
                    return setstate("O")
               }else{
                    el.textContent=state
                    console.log(`Y${el.className}`)
                    return setstate("X")
               }
          }
     }
     return(
          <div onClick={display} style={{display:"flex",width:"300px",flexWrap:"wrap",margin:"0px auto"}} >
               <Elementbox classn="a" />
               <Elementbox classn="b"/>
               <Elementbox classn="c" />
               <Elementbox classn="d" />
               <Elementbox classn="e" />
               <Elementbox classn="f" />
               <Elementbox classn="g" />
               <Elementbox classn="h" />
               <Elementbox classn="i" />
          </div>
     )

}
