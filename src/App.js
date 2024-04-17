//import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
