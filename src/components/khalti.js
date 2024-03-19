// import React from 'react'
// import KhaltiCheckout from "khalti-checkout-web";
// import config from "./khaltiConfig"

// export const Navbarw = () => {
//   let checkout = new KhaltiCheckout(config);

//   return (
//      <div>
//        <button onClick={()=> checkout.show({amount:10000})} >Pay Via Khalti💜</button>
//      </div>
//   );
// };

import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

export const Navbarw = ({ totalAmount }) => {
  let checkout = new KhaltiCheckout(config);

  return (
    <div>
      <button onClick={() => checkout.show({ amount: totalAmount * 100 })}>
        Pay Via Khalti💜
      </button>
    </div>
  );
};
