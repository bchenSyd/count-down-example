import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import EventContainer from "./containers/EventContainer";
import registerServiceWorker from "./registerServiceWorker";

const App = () => (
  <div className="App">
    <header className="App-header-footer">
      <h2>bet easy</h2>
    </header>
    <div className="App-content">
      <EventContainer />
    </div>
    <footer className="App-header-footer">
      <div>bochen2014@yahoo.com</div>
    </footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
