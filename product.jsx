import React from "react";
import "./product.css";
function Product() {
  return (
    <div className=" product">
     
        <h6>Product</h6>
        <div className="type col-sm-11">
          <p>Type :</p>
          <span>Dealer</span>
        </div>
        <div className="subscription-id ">
          <p className="col-md-6 ">Subscription ID :</p>
          <span className="col-md-6 "> S2KM-AO4J-TMXA-ZCJI</span>
        </div>
      </div>
   
  );
}

export default Product;
