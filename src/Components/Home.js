/** @format */

import React from "react";
import "./Home.css";
import patternM from "../images/pattern-divider-mobile.svg";
import patternD from "../images/pattern-divider-desktop.svg";
import button from "../images/icon-dice.svg";
import Loading from "../utils/Loading";

const Home = ({ state, refreshData }) => {
  return (
    <div>
      {state.loading && <Loading loading={state.loading} />}
      {state.doneFetching && (
        <div className="container" key={state.data.slip.id}>
          <p> ADVICE #{state.data.slip.id}</p>
          <p className="advice">"{state.data.slip.advice}"</p>
          <img className="patterM mobile" src={patternM} alt="" />
          <img className="patternD desktop" src={patternD} alt="" />
          <div>
            {" "}
            <img
              onClick={() => {
                refreshData("https://api.adviceslip.com/advice");
              }}
              className="btn"
              src={button}
              alt=""
              style={{ cursor: "pointer" }}
            />
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
