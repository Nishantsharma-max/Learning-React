import { useState } from "react"
import "./comment.css"
import Commentform from "./Commentform"
export default function Comment(){
     let [comment,setcomment]=useState([{username:"Nishant",
          remark:"good job",
          rating:3
     }])

     let addnewcomment=(comment)=>{
          console.log(comment)
          setcomment((curremtcomment)=>{
               return [...curremtcomment,comment]
          })

     }
     
     
     return (<div>
          <Commentform addnewcomment={addnewcomment}/>
          <h1>comments</h1>
          {comment.map((elobj,idx)=>{
               return (<ul key={idx} className="commentlist">
                    <li >username:{elobj.username}</li>
                    <li>remark:{elobj.remark}</li>
                    <li>rating:{elobj.rating}</li>
               </ul>)
          })}
          
     </div>)
}