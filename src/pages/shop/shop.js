import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

import Banner from "../../assets/products/banner.png";
import Banner1 from "../../assets/products/banner1.png";

import "./shop.css";

export const Shop = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleSearch = () => {
    const filtered = PRODUCTS.filter(
      (product) =>
        product.productName.toLowerCase().includes(search.toLowerCase()) ||
        product.id.toString() === search
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="shop">
      <img
        src={Banner}
        alt="Banner"
        style={{ marginTop: "70px", width: "90%", height: "300px" }}
      />
      {/* Image with width and height */}
      <img
        src={Banner1}
        alt="Banner"
        style={{ marginTop: "70px", width: "90%", height: "150px" }}
      />
      {/* Image with width and height */}
      <div className="shopTitle">
        <strong> Welcome to Gharra</strong>
        <small>.Np</small>
      </div>
      <div>
        <input
          value={search}
          className="searchInput"
          placeholder="search here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
