// var React =require("react");
// var ReactDOM =require("react-dom");
// Above code can also be written as follows:
import React from "react";
import ReactDOM from "react-dom";

//we are able to import html into javascript using jsx.

const fname = "Pranjal";
const lname = "Vanjale";

const year = new Date().getFullYear(); //this returns the current year according to the date mentioned
// ReactDOM.render(what to Show,where to show)

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "black";
ReactDOM.render(
  <div>
    <h1 id="heading" contentEditable="true" spellCheck="false">
      Hello {fname} {lname}
    </h1>
    {/* this makes content editable and disables checking the spelling */}
    <h1 style={customStyle}>Hello {`${fname} ${lname}`}</h1>
    <p>Your lucky number is {Math.floor(10 * Math.random())}</p>
    <ul>
      <li>burger</li>
      <li>maggi</li>
      <li>tea</li>
    </ul>

    <p>Copyright {year}</p>
  </div>,

  document.getElementById("root")
);

//here we can render only one html element ..we cannot render multiple html elements.So we need to include all the tml tags to be displayed inside one single html elemet that is div
