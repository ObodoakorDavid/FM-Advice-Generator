/** @format */

import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { useReducer } from "react";
import { useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, data: action.data, loading: false, doneFetching: true };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: "",
    doneFetching: false,
    loading: true,
  });

  // console.log(state.fetching);

  let getData = async (url) => {
    let res = await fetch(url);
    let data1 = await res.json();
    console.log(data1);
    dispatch({ type: "FETCH", data: data1 });
    console.log(state.data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData("https://api.adviceslip.com/advice");
    }, 2000);
  }, []);

  // console.log(state.doneFetching);
  // console.log(state.loading);
  // console.log(state.data.slip);
  //api.adviceslip.com/

  https: return (
    <div className="App">
      <Home state={state} />
    </div>
  );
}

export default App;
