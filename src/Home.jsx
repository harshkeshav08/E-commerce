import { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import { ClipLoader } from "react-spinners";
function Home({searchTerm,addToCart}) {
    const[products,setProducts]=useState([]);
    const[loading,setloading]=useState(true);

 const filteredProducts =
  typeof searchTerm === "string" && searchTerm !== ""
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;
    useEffect(()=>{
       
        fetch("https://dummyjson.com/products?limit=0")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setProducts(data.products);
            setloading(false);
        });
    }, []);

    if (loading) {
        return(
            <div className="spinner">
                <ClipLoader />
            </div>
        );
        
    }

    return( 
        <main className="home">
            <section className="hero">
                <h1>Find products you love </h1>
                <p>Discover amazing products at great prices.</p>
            </section>
          <section className="products-section">

            <div className="product-grid">
           {filteredProducts.length>0?(
           filteredProducts.map((product)=>(
            <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            
            />
           ))
        ) : (
<h2 className="error">product not found </h2>
        )}
            </div>
          </section>
        </main>

    )
}
export default Home;