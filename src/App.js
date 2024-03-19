//import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/signIn" element={<Auth />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
