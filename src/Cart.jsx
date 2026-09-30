function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h2 className="empty">Your cart is empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              
              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>Price: ₹{item.price}</p>

              <button onClick={() => decreaseQuantity(item.id)}>
                −
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>

              <button onClick={() => deleteFromCart(item.id)}>
                Delete
              </button>
            </div>
          ))}

          <h2>Total: ₹{total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;