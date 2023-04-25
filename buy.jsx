import React from "react";
import "./buy.css";
import Button from '../../component/Buttons/button'
import Select from "../../component/Select/select";
import Navbar from "../../component/Navbar/navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const Buy = () => {
  const productName = ["One", "Two", "Three"];
  const years = [1, 2, 3, 4];
 
  return (
    <div className="container top p-0 ">
      <Navbar value={"Buy"} color='white'/>
      <div className="row d-flex justify-content-around row1">
        <h4 className="h4 subscription p-3 m-0 ">Buy new subscription</h4>
        <div className="col-md-6 col-lg-6 col-sm-11">
          <label className="label mb-2" htmlFor="product name">
            1. Choose product name from list*
          </label>
          <Select
            className="select"
            data={productName}
            width={50}
            border={"none"}
            borderBottom={1}
            radius={0}
            borBotColor={"black"}
            value={"Product name"}
          />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-11  p-3">
          <label className="label mb-3" htmlFor="users">
            <span className="span">
            2. How many users do you want to connect?
            </span>
            <span className="span">(please input quantity)*</span>
          </label>
          <input
            className="input border-bottom border-dark  mb-3"
            type="text"
            name="0"
            placeholder="0"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-11  p-3">
          <label className="label mb-3" htmlFor="country">
            3. How many years do you want support?*
          </label>

          <Select
            data={years}
            width={50}
            border={"none"}
            radius={0}
            txt={"solid"}
            red={"black"}
            borBottom={1}
            bColor={"white"}
            value={0}
          />
         
        </div>
        <div className="row  d-flex button-box ">
            <div className="col-md-6">
            <Button
              width={180}
              height={50}
              bgColor={"red"}
              radius={40}
              color={"white"}
              text={"Back "}
              mBottom={20}
            />
            </div>
            <div className="col-md-6">

            <Button
              width={180}
              height={50}
              bgColor={"#51b5c4"}
              radius={40}
              text={"Send a request "}
              color={"white"}
              mBottom={20}
            />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Buy;
