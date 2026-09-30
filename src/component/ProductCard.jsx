function ProductCard ({product,addToCart}){
    return(
     <div className="product-card">
<img
src={product.thumbnail}
alt={product.title}
onError={(e) => {
    e.target.src="https://picsum.photos/300"
}}
/>
<h3 style={{color: "black", fontSize: "20px"}}>
    {product.title}</h3>

<p>₹{product.price}</p>

         <button onClick={()=> addToCart(product)}>
            Add to Cart</button>
            </div>

    )
}
export default ProductCard;