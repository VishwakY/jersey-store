import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "India Cricket Jersey", price: 1499, img: "https://via.placeholder.com/300", desc: "Premium quality jersey" },
    { id: 2, name: "Real Madrid Jersey", price: 1999, img: "https://via.placeholder.com/300", desc: "Elite performance wear" },
    { id: 3, name: "Lakers Jersey", price: 1799, img: "https://via.placeholder.com/300", desc: "Comfort + style" }
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">JERSEYX</h1>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("shop")}>Shop</button>
          <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="hero">
          <h2>IMPOSSIBLE IS NOTHING</h2>
          <button onClick={() => setPage("shop")}>SHOP NOW</button>
        </div>
      )}

      {/* SHOP */}
      {page === "shop" && (
        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card" onClick={() => { setSelectedProduct(p); setPage("product"); }}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* PRODUCT PAGE */}
      {page === "product" && selectedProduct && (
        <div className="product-page">
          <img src={selectedProduct.img} />
          <div>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.desc}</p>
            <h3>₹{selectedProduct.price}</h3>

            <select className="size-select">
              <option>Select Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
          </div>
        </div>
      )}

      {/* CART */}
      {page === "cart" && (
        <div className="container">
          <h2>Your Cart</h2>
          {cart.map((item, i) => (
            <div key={i} className="cart-item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>

          <button
            onClick={() => {
              alert("Payment Successful (Demo)");
            }}
          >
            Pay Now
          </button>
        </div>
      )}

      <footer className="footer">© 2026 JerseyX</footer>
    </div>
  );
}