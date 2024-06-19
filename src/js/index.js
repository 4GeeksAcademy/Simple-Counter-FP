import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';

import "../styles/index.css";

const SecondsCounter = (props) => {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};


let counter = 0;
const root = ReactDOM.createRoot(document.querySelector('#app'));
setInterval(() => {
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;
  console.log(four, three, two, one);

  root.render(
      <SecondsCounter
        digitFour={four}
        digitThree={three}
        digitTwo={two}
        digitOne={one}
      />
  );
  counter++;
}, 1000);

