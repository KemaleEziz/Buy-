import React from "react";
import "./support.css";
import Navbar from "../../component/Navbar/navbar";
import Button from "../../component/Buttons/button";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function Support() {
  return (
    <>
      <div className="container  top p -0">
        <Navbar value={"Support"} />
        <div className="row row1 d-flex justify-content-between  mb-4 mt-4">
          <div className="col">
            <span className="top-span">+994(50)1234567 - Azerbaijan</span>
            <span className="top-span">
              Monday-Friday 9 : 30 AM - 6 : 30 PM Available
            </span>
            <span className="top-span">Support Cases : Unlimited</span>
          </div>
          <div className="col button-div  text-center">
            <Button text={'Create New Ticket'} bgColor={'#51b5c4'} width={170}
            height={50} color={'white'} radius={40}/>
          </div>
        </div>

        <table className="table row3 table-bordered border-rounded">
          <thead>
            <tr className="text-center th">
              <th className="col-md-3">Title</th>
              <th className="col-md-3">Date</th>
              <th className="col-md-3">Status</th>
              <th className="col-md-3">Ticket ID</th>
            </tr>
          </thead>
        </table>
        <table className="table row3 table-bordered">
          <tbody className="tbody bg-light">
            <tr className="text-center tr">
              <td className="col-md-3 td">Dialer</td>
              <td className="col-md-3 td">30.03.2023</td>
              <td className="col-md-3 td" style={{ color: "#f5dd00" }}>
                In Review
              </td>
              <td className="col-md-3 ">ID : 1235498</td>
            </tr>
            <tr className="tr ">
              <td className="col-md-3 dot td">.</td>
              <td className="col-md-3 td"></td>
              <td className="col-md-3 td"></td>
              <td className="col-md-3 "></td>
            </tr>
            <tr className="tr">
              <td className="dot td">.</td>
              <td className="col-md-3 td"></td>
              <td className="col-md-3 td"></td>
              <td className="col-md-3 "></td>
            </tr>
            <tr className="tr">
              <td className="col-md-3 td dot">.</td>
              <td className="col-md-3 td"></td>
              <td className="col-md-3 td"></td>
              <td className="col-md-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Support;
