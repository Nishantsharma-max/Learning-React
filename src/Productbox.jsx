export default function Productbox({productname,productdes1,productdes2,oldprice,newprice}) {
     return(
          <div style={{border: "1px solid black",padding:"0px 50px",display:"flex",flexDirection:"column",justifyContent:"space-evenly", height:"20vh",borderRadius:"20px"}}>
               <h3 style={{fontWeight:"900"}} >{productname}</h3>
               <h5>{productdes1}</h5>
               <h5>{productdes2}</h5>
               <div style={{backgroundColor:"gold"}} >
                    <strike>{oldprice}</strike>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{newprice}</span>
               </div>

          </div>

     )
}