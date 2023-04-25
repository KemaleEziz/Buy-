import React from "react";
import "./user.css";
function User() {
  return (
    <div className="user">
      <h6>User</h6>

      <div className="total">
        <p>Total :</p>
        <span>25</span>
      </div>
      <div className="active">
        <p>Active currently:</p>
        <span>18</span>
      </div>
    </div>
  );
}

export default User;
