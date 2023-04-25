import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
import { FaEllipsisV } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
 import { FaBars } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";



function Navbar({value}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#" style={{color:'white',fontSize:'25px',fontWeight:600,paddingLeft:'15px'}}>
         {value}
      
          </a>
          
          
        </div>
        <div  style={{float:"right"}} className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
      <li  className="nav-item">
                <a className="nav-link active fa-user" aria-current="page" href="#">
                  <FaUser className="fa-user"/>
                </a>
              </li>

              <li  className="nav-item">
                <a className="nav-link split" href="#">
                  <p style={{fontSize:'15px',padding:'0px',margin:'0px',color:'white'}}> Name Surname</p>
                  <p style={{fontSize:'15px',padding:'0px',margin:'0px',color:'white'}}> Username@agile.az</p>
                </a>
              </li>
              <li  className="nav-item dropdown"  >
              
                <a
                  className="nav-link dropdown-toggle split"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <FaEllipsisV className="fa-ellipsis" color="black" size={25} />
                 <FaBars className="fa-icon" color="black" size={25}/>
                </a>
                <ul
                
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Licenses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
