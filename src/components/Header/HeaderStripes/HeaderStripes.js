import React from "react";
import "./HeaderStripes.css";

const stripeArray = [
  {
    id: 1,
    color: "var(--web-purple)",
    width: "30px",
  },
  {
    id: 2,
    color: "var(--web-indigo)",
    width: "25px",
  },
  {
    id: 3,
    color: "var(--web-blue)",
    width: "20px",
  },
  {
    id: 4,
    color: "var(--web-aqua)",
    width: "15px",
  },
  {
    id: 5,
    color: "var(--web-pink)",
    width: "10px",
  },
  {
    id: 6,
    color: "var(--web-peach)",
    width: "5px",
  },
  {
    id: 7,
    color: "var(--web-cream)",
    width: "2.5px",
  },
];
const HeaderStripes = () => {
  return (
    <div className="header-stripes">
      {stripeArray.map((stripe) => {
        return (
          <div
            className="header-single-stripe"
            style={{
              marginRight: "125px",
              width: stripe.width,
              backgroundColor: stripe.color,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default HeaderStripes;
