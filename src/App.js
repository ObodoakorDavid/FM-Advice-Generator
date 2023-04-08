/** @format */

import "./App.css";
import Home from "./Components/Home";
import { useReducer } from "react";
import { useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        data: action.data,
        loading: false,
        doneFetching: true,
      };
    case "REFRESH":
      return {
        ...state,
        loading: true,
        doneFetching: false,
      };
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

  let getData = async (url) => {
    let res = await fetch(url);
    let data1 = await res.json();
    dispatch({ type: "FETCH", data: data1 });
  };

  let refreshData = async (url) => {
    dispatch({ type: "REFRESH" });
    let res = await fetch(url);
    let data1 = await res.json();
    dispatch({ type: "FETCH", data: data1 });
  };

  useEffect(() => {
    setTimeout(() => {
      getData("https://api.adviceslip.com/advice");
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Home state={state} refreshData={refreshData} />
    </div>
  );
}

export default App;
