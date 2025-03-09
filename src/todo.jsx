import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
export default function Todo(){
     let [todo,settodo]=useState([{task:"sample task", id: uuidv4(),styles:{textDecorationLine:""}}])
    let [newtodo,setnewtodo]=useState("")
 
 

    let resetnewtodo = (event) => {
     setnewtodo(event.target.value)
    }

    let addtask=()=>{
          settodo([...todo,{task:newtodo,id:uuidv4(),styles:{textDecorationLine:""}}])
          setnewtodo("")
    }
    let handledelete=(id)=>{
     let copy=todo.filter((todo)=>{
          return todo.id != id
     })
     settodo([...copy])
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

     let handlecrossbtn=()=>{
          settodo((todo)=>{return todo.map((el)=>{return {...el,styles:{...el.styles,textDecorationLine:"line-through"}}})})
     }

    let handleonecrossbtn=(id)=>{
     settodo((pretodo)=>pretodo.map((el)=>{
          if (el.id==id){
               return {...el,styles:{...el.styles,textDecorationLine:"line-through"}}
          }else return {...el}
     }))
    }

    
  
     return(
     <div style={{width:"300px"}}>
          <h3>TODO LIST</h3><br />
          <input type="text" placeholder="Add Task..." value={newtodo} onChange={resetnewtodo} />
          <button onClick={addtask} >add task</button><br /><hr /><br />
          <ul>
               {
                    todo.map((todo)=>{
                         return <div style={{display:"flex",justifyContent:"space-between"}}>
                         <li style={todo.styles}   key={todo.id}>{todo.task}</li>
                         <button onClick={()=>handleonecrossbtn(todo.id)}>Mark done</button>
                         <button onClick={()=>handledelete(todo.id)} style={{backgroundColor:"red"}} >Delete</button>
                         <button onClick={()=>uppercaseone(todo.id)}>upperCaseone</button>
                         </div>
                    })
               }
          </ul><br/>
          <button onClick={uppercase}>upperCase</button>
          <button onClick={handlecrossbtn}>Mark all as done</button>
          
     </div>
     );
}