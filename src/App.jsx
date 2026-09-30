import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Home";
import Cart from "./Cart";

import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
const [darkMode, setDarkMode] = useState(false);
  const addToCart = (product) => {
    setCart((oldCart) => {
      const existingProduct = oldCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];

      
    });
    toast.success("Product added to cart!")
  };

  const increaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteFromCart = (id) => {
    setCart((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>

    <ToastContainer />

      <Navbar
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        onCartClick={() => setShowCart(!showCart)}
      darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {showCart ? (
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          deleteFromCart={deleteFromCart}
        />
      ) : (
        <Home
          searchTerm={searchTerm}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;