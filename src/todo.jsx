import { useState } from "react"
export default function Todo(){
     let [todo,settodo]=useState(["sample task"])
    let [newtodo,setnewtodo]=useState("")

    let resetnewtodo = (event) => {
     setnewtodo(event.target.value)
    }

    let addtask=()=>{
          settodo([...todo,newtodo])
          setnewtodo("")
    }

     
     return(
     <div style={{width:"200px"}}>
          <h3>TODO LIST</h3><br />
          <input type="text" placeholder="Add Task..." value={newtodo} onChange={resetnewtodo} />
          <button onClick={addtask} >add task</button>
          <ul>
               {
                    todo.map((todo)=>{
                         return <li>{todo}</li>
                    })

               }
          </ul>
     </div>
     );
}