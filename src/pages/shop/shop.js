import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

import Banner from "../../assets/products/banner.png";
import Banner1 from "../../assets/products/banner1.png";

import "./shop.css";
export const Shop = () => {
  return (
    <div className="shop">
      <img
        src={Banner}
        alt="Banner"
        style={{ marginTop: "70px", width: "100%", height: "300px" }}
      />{" "}
      {/* Image with width and height */}
      <img
        src={Banner1}
        alt="Banner"
        style={{ marginTop: "70px", width: "100%", height: "150px" }}
      />{" "}
      {/* Image with width and height */}
      <div className="shopTitle">
        <strong>Gharra</strong>
        <small>.Np</small>
      </div>
      {/* <p>{loggeduser ? loggeduser[0].email:"No data"}</p> */}
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
