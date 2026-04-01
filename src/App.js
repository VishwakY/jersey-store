import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("shop");
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const products = [
    { id: 1, name: "India Cricket Jersey", price: 1499, img: "https://via.placeholder.com/300" },
    { id: 2, name: "Real Madrid Jersey", price: 1999, img: "https://via.placeholder.com/300" },
    { id: 3, name: "Lakers Jersey", price: 1799, img: "https://via.placeholder.com/300" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="App">
      <header className="header">
        <h1>Jersey Store</h1>
        <div>
          <button onClick={() => setView("shop")}>Shop</button>
          <button onClick={() => setView("cart")}>
            Cart ({cart.length})
          </button>
        </div>
      </header>

      {view === "shop" && (
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {view === "cart" && (
        <div className="container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              {cart.map((item, i) => (
                <div key={i} className="cart-item">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
              <h3>Total: ₹{total}</h3>
              <button onClick={() => setView("checkout")}>
                Checkout
              </button>
            </>
          )}
        </div>
      )}

      {view === "checkout" && (
        <div className="container">
          <h2>Checkout</h2>
          <input
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <input
            placeholder="Address"
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />
          <input
            placeholder="Phone"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button
            onClick={() => {
              const message = `Order Details:%0AName: ${form.name}%0AAddress: ${form.address}%0APhone: ${form.phone}%0ATotal: ₹${total}`;
              window.open(
                `https://wa.me/919032572929?text=${message}`,
                "_blank"
              );
            }}
          >
            Place Order (WhatsApp)
          </button>
        </div>
      )}

      <footer>
        <p>© 2026 Jersey Store</p>
      </footer>
    </div>
  );
}