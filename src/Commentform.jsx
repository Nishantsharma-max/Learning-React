import { useState } from "react"

export default function Commentform(){
     let [formdata,setformdata]=useState({username:"",remark:"",rating:5})

     let handleinput=(event)=>{
          setformdata((currentdata)=>{
               return {...currentdata,[event.target.name]:event.target.value}

          })
     }

     return (
     <div>
          <h1>Give a comment!</h1>
          <form action="#">
               <input type="text" 
               onChange={handleinput}
               placeholder="username"
               value={formdata.username}
               name="username"/>
               <br /><br />
               <textarea value={formdata.remark} 
               onChange={handleinput}
               placeholder="Add remarks" rows={5} cols={30} name="remark">Remarks</textarea>
               <br /><br />
               <input type="number"
               onChange={handleinput}
               style={{width:"170px"}} 
               placeholder="rating us out of 5"
               value={formdata.rating} 
               max={5}
               min={1}
               name="rating"/>
               <br /><br />
               <button>Add comment</button>
          </form>
     </div>
     )
}