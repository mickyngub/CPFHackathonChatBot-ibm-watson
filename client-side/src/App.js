import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Chat from "./components/chat/Chat";
const App = () => {
  return (
    <Provider store={store}>
      <div>Hey there!</div>;
      <Chat />
    </Provider>
  );
};

export default App;
