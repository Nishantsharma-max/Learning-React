import { useState,useEffect } from "react";
export default function Lottary(){
     const [ticket,setticket]=useState(555)
     const [h1,seth1]=useState("Lottery Game")
     let generateTicket=()=>{
          setticket(()=>Math.floor((Math.random()*900)+100))
     }
     useEffect(()=>{
          let str=ticket.toString()
          let sum=[...str].reduce((acc,el)=> Number(acc) + Number(el))
          console.log(sum)
          if (sum==15){
               return seth1(()=>"Lottary'congratulations'you won")
          }else return seth1(()=>"Lottary Game")
     },[ticket])
     
     

     return(<div>
          <h1>{h1}</h1>
          <h3>Lottery Ticket={ticket}</h3>
          <button onClick={generateTicket}>Get New Ticket</button>
     </div>)

}