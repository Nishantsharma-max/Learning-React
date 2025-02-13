import Product from "./Product"

function Producttab() {
     // let option=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"strong"</li>]
     // let option=["hi-tech","durable","strong"]
     return (
          <>
          <Product title="laptop" price={40000}  />
          <Product title="phone" price={10000}   />
          <Product title="buds" price={20000}    />
          </>
     )
}

export default Producttab