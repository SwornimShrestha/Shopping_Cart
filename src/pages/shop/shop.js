import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
export const Shop = () => {
  return (
    <div className="shop">
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
