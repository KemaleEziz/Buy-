import React from "react";
import "./reg.css";
function Registration() {
  return (
    <div className="registration">
      <div className="top-register">
        <h6>Registration</h6>
      </div>

      <div className=" container register-box  ">
        <div className="row m-0 d-flex justify-content-between">
          <div className="div1 col-lg-6 col-md-5 col-sm-11 col-xs-11">
            <div className="company-name col-sm-11 col-xs-11">
              <p >Company name :</p>
              <span>PashaBank</span>
            </div>
            <div className="col-sm-11 col-xs-11 email ">
              <p>Email:</p>
              <span>pashabank@pasha.az</span>
            </div>
          </div>

          <div className="div2 row col-lg-5 col-md-5 col-sm-11 col-xs-11">
            <div className="country">
              <p>Country :</p>
              <span>Azerbaijan</span>
            </div>
            <div className="phone-number">
              <p>Phone Number :</p>
              <span>+994(50)1234567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
