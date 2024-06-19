import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

const SecondsCounter = ({ digitFour, digitThree, digitTwo, digitOne }) => {
  return (
    <div className="bigCounter">
      <div className="calendar">
      <i className="far fa-clock"></i>
      </div>
      <div className="four">{digitFour % 10}</div>
      <div className="three">{digitThree % 10}</div>
      <div className="two">{digitTwo % 10}</div>
      <div className="one">{digitOne % 10}</div>
    </div>
  );
};

let counter = 0
setInterval(() => {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(four, three, two, one);
  counter++;

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(    <SecondsCounter
  digitOne={one}
  digitTwo={two}
  digitThree={three}
  digitFour={four}
/>
  );
}, 1000);

