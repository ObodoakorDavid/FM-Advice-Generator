/** @format */

import React from "react";

const Home = ({ state }) => {
  return (
    <div>
      {state.loading && <div>Loading</div>}
      {state.doneFetching && (
        <div key={state.data.slip.id}>
          <p>{state.data.slip.advice}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
