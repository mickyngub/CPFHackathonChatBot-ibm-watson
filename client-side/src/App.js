import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>Hey there!</div>;
    </Provider>
  );
};

export default App;
