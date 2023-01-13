import React, { useState } from "react";
import logo from "./logo.png";
import "./Landing.css";
const Landing = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleClick = (id) => {
    setSelectedDiv(id);
  };
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="main">
        <div className="login">
          <span className="login_logo"></span>
          <h2>It's a delight to have you onboard</h2>
          <p className="tagline">Help us know you better</p>
          <p className="details">
            (This is how we optimize Wobot as per your business needs)
          </p>
          <div className="input-group">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Example Inc"
            />
          </div>
          <div className="input-group">
            <label htmlFor="industy">Industry</label>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="industy">Company Size</label>
            <div className="sizeDetails">
              <p
                className="sizeNumber"
                onClick={() => handleClick("div1")}
                style={{
                  backgroundColor:
                    selectedDiv === "div1" ? "#3766E8" : "#F0F0F0",
                  color: selectedDiv === "div1" ? "#fff" : "#000",
                }}
              >
                1-20
              </p>
              <p
                onClick={() => handleClick("div2")}
                style={{
                  backgroundColor:
                    selectedDiv === "div2" ? "#3766E8" : "#F0F0F0",
                  color: selectedDiv === "div2" ? "#fff" : "#000",
                }}
                className="sizeNumber"
              >
                21-50
              </p>
              <p
                onClick={() => handleClick("div3")}
                style={{
                  backgroundColor:
                    selectedDiv === "div3" ? "#3766E8" : "#F0F0F0",
                  color: selectedDiv === "div3" ? "#fff" : "#000",
                }}
                className="sizeNumber"
              >
                51-200
              </p>
              <p
                onClick={() => handleClick("div4")}
                style={{
                  backgroundColor:
                    selectedDiv === "div4" ? "#3766E8" : "#F0F0F0",
                  color: selectedDiv === "div4" ? "#fff" : "#000",
                }}
                className="sizeNumber"
              >
                201-500
              </p>
              <p
                onClick={() => handleClick("div5")}
                style={{
                  backgroundColor:
                    selectedDiv === "div5" ? "#3766E8" : "#F0F0F0",
                  color: selectedDiv === "div5" ? "#fff" : "#000",
                }}
                className="sizeNumber"
              >
                500+
              </p>
            </div>
          </div>
          <button>Get Started</button>
        </div>
        <footer>Terms of use | Privacy policy</footer>
      </div>
    </>
  );
};
export default Landing;
