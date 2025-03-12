import { useState } from "react"

export default function Form(){
     let [inputdata,setinputdata]=useState({username:"",useremail:""})
     let handleinput=(event)=>{
          setinputdata((currentdata)=>{
                //compute property name
               return {...currentdata,[event.target.name]:event.target.value}

          })
     }
     let handleform=(event)=>{
          event.preventDefault()
          setinputdata({username:"",useremail:""})

     }
     return <form onSubmit={handleform}>
          <label htmlFor="username">Username:</label>
          <input id="username"
               onChange={handleinput}
               placeholder="enter full name"
               type="text" 
               value={inputdata.username}
               name="username"/>

          <br /><br />

          <label htmlFor="useremail">Useremail:</label>
          <input id="useremail"
               onChange={handleinput}
               placeholder="enter email" 
               type="text"
               value={inputdata.useremail}
               name="useremail"/>

          <br /><br />

          <button>Submit</button>
     </form>
}