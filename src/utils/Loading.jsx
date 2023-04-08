/** @format */

import React, { useState } from "react";
import { PulseLoader } from "react-spinners";

const Loading = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [color, setColor] = useState("hsl(150, 100%, 66%)");
  return (
    <div className="loading">
      <PulseLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
