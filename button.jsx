import React from "react";
import "./button.css"
function Button({ text, width, height, bgColor, radius,color,value,mTop,mBottom, }) {
  return (
    
      <button 
      className="button"
        style={{
          width: width + "px",
          height: height + "px",
          backgroundColor: bgColor,
          borderRadius: radius,
          border:'none',
          color:color,
          text:value,
          marginTop:mTop,
          marginBottom:mBottom + "px",
         
        
        }}
      >
        {text}
      </button>
    
  );
}

export default Button;
