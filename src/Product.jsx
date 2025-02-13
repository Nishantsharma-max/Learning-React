import "./Product.css"

function Product({title,price=10}) {
     let isDiscount=price>10000
     let styles = {backgroundColor: isDiscount ? "pink" : ""}
     return (
          <div className="Product" style={styles} >
               <h3>{title}</h3>
               <h6>price: {price}</h6>
               {isDiscount && <p>discount of 5%</p>}
          </div>
     );
}

export default Product