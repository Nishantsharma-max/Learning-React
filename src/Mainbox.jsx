import Productbox from "./Productbox"
export default function Mainbox() {
     return (
          
          <div style={{border: "1px solid black"}} >
               <h2 style={{paddingTop:"20px"}} >Blockbuster Deals on Computer Accessories|Shop Now</h2>
               <div style={{display:"flex",justifyContent:"space-between",padding:"50px 20px 20px 20px"}} >
                    <Productbox productname="Logitech MX Master" productdes1="80000 DPI" productdes2="5 Programmable Buttons" oldprice="12,495" newprice="8,999" />
                    <Productbox productname="Logitech MX Master" productdes1="80000 DPI" productdes2="5 Programmable Buttons" oldprice="12,495" newprice="8,999" />
                    <Productbox productname="Logitech MX Master" productdes1="80000 DPI" productdes2="5 Programmable Buttons" oldprice="12,495" newprice="8,999" />
                    <Productbox productname="Logitech MX Master" productdes1="80000 DPI" productdes2="5 Programmable Buttons" oldprice="12,495" newprice="8,999" />
               </div>
     
          </div>
     )
}