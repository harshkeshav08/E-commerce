import { useState } from "react";

function Navbar ({setSearchTerm,
    cartCount,
    onCartClick,
    darkMode,
    setDarkMode
}){
    const[inputValue,setInputValue]= useState("");
    return (
        <nav className="navbar">
            <h1 className="logo"> <a href="">SHOPORA</a></h1>

            <div className="bar">
                <input type="text" placeholder="Enter your product name..."
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                />
                <button onClick={()=> setSearchTerm(inputValue)}>🔍</button>
            </div>

            <div className="action">
<button  onClick={onCartClick}>🛒 Cart ({cartCount})</button>
<button onClick={() => setDarkMode(! darkMode)}>
  {darkMode ? "🌞" : "🌚"}
</button>
            </div>
        </nav>
    )
    
}
export default Navbar;