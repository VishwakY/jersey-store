import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "India Cricket Jersey", price: 1499, img: "https://via.placeholder.com/300" },
    { id: 2, name: "Real Madrid Jersey", price: 1999, img: "https://via.placeholder.com/300" },
    { id: 3, name: "Lakers Jersey", price: 1799, img: "https://via.placeholder.com/300" },
    { id: 4, name: "Barcelona Jersey", price: 1899, img: "https://via.placeholder.com/300" }
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">JERSEYX</h1>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("shop")}>Shop</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
        </div>
      </nav>

      {/* Home */}
      {page === "home" && (
        <div className="hero">
          <h2>IMPOSSIBLE IS NOTHING</h2>
          <p>Premium jerseys for true fans.</p>
          <button onClick={() => setPage("shop")}>SHOP NOW</button>
        </div>
      )}

      {/* Shop */}
      {page === "shop" && (
        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {/* Cart */}
      {page === "cart" && (
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
            </>
          )}
        </div>
      )}

      {/* About */}
      {page === "about" && (
        <div className="container">
          <h2>About Us</h2>
          <p>
            JerseyX delivers premium sports jerseys inspired by global brands like Adidas.
            Built for performance, style, and passion.
          </p>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">© 2026 JerseyX</footer>
    </div>
  );
}