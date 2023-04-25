import React from "react";
import "./homepage.css";
import Navbar from "../../component/Navbar/navbar";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
function Home1() {
  return (
    <>
      <div className="container container1 top p-0 ">
        <Navbar value={"Home Page"} color='white' fontSize={25}/>

        <div className="container pt-2 container2 p-0">
          <div className="row d-flex justify-content-around">
            <div className="col-md-3 col-lg-3 col-sm-12  Company-name ">
              <div className="left-blog">
                <h5>Company name</h5>
                <span>Coustomer ID: 329816</span>
              </div>
              <div>
                {/* <img src={Logo} alt="ops" className="logo" /> */}
              </div>
            </div>
            
            <div className="col-md-3 col-lg-3 col-sm-12 little-columns  px-3">
              <a href="">
                <p className="Total-Licenses">Total Licenses</p>
                <span>4</span>
              </a>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 little-columns">
              <a href="">
                <p style={{ paddingTop: "25px" }}>Active</p>
                <span>2</span>
              </a>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 little-columns">
              <a href="">
                <p style={{ paddingTop: "25px" }}>Expired</p>
                <span>1</span>
              </a>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 little-columns">
              <a href="">
                <p style={{ paddingTop: "25px" }}>Locked</p>
                <span>1</span>
              </a>
            </div>
            <div className="row footer col-lg-11 col-sm-11 col-md-11"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;
