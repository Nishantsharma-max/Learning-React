import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
export default function Todo(){
     let [todo,settodo]=useState([{task:"sample task", id: uuidv4()}])
    let [newtodo,setnewtodo]=useState("")
    let [styles,setstyles]=useState({})

    let resetnewtodo = (event) => {
     setnewtodo(event.target.value)
    }

    let addtask=()=>{
          settodo([...todo,{task:newtodo,id:uuidv4()}])
          setnewtodo("")
    }
    let handledelete=(id)=>{
     let copy=todo.filter((todo)=>{
          return todo.id != id
     })
     settodo([...copy])
          // for(let el of todo){
     //      if (el.id==event.target.id){
     //          todo.splice(todo.indexOf(el),1)
     //          settodo([...todo])
     //      }
     // settodo((prev)=>{prev.filter((prev)=> prev.id!=id)})
          
     }

     let uppercase=()=>{
          settodo((todo)=>todo.map((el)=>{return {...el,task:el.task.toUpperCase()}}))
     }

     let uppercaseone=(id)=>{
          settodo((todo)=>todo.map((el)=>{
               if(el.id==id)
                return {...el,task:el.task.toUpperCase()}
               else return {...el}
               }
          ))
     }

    

     return(
     <div style={{width:"400px"}}>
          <h3>TODO LIST</h3><br />
          <input type="text" placeholder="Add Task..." value={newtodo} onChange={resetnewtodo} />
          <button onClick={addtask} >add task</button><br /><hr /><br />
          <ul>
               {
                    todo.map((todo)=>{
                         return <>
                         <li style={styles}  key={todo.id}>{todo.task}</li>
                         <button onClick={()=>handledelete(todo.id)} style={{backgroundColor:"red"}} >Delete</button>
                         <button onClick={()=>uppercaseone(todo.id)}>upperCaseone</button>
                         </>
                    })
               }
          </ul>
          <button onClick={uppercase}>upperCase</button>
     </div>
     );
}