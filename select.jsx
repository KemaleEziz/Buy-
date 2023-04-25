import React from "react";
import "./select.css";

function Select({data, width, height, radius, bColor, borBottom,borBotColor,value}) {
  return (
    <>
      <select
        defaultValue="Productname"
        className="select"
        style={{
        border: "none",
        width: width + '%',
        height: height + "px",
        borRadius: radius,
        bColor: bColor,
        borBottom:borBottom,
        borBotColor:borBotColor,
        
      }}
      >
        <option className="option"  value="Productname"  disabled >{value}</option>
        {
          data?.map((item,index)=>(
            <option key={index} defaultValue="Productname">{item}</option>
          ))
        }
      </select>
    </>
  );
}

export default Select;
