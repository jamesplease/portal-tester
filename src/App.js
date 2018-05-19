import React, { Component } from "react";
import "./App.css";
import Tooltip from "./tooltip";
import createGlobalComponent from "./create-global-component";

const GlobalTooltip = createGlobalComponent();

class App extends Component {
  render() {
    const { tooltipOpen } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Global Component Test Thing</h1>
        </header>
        <button onClick={() => this.setState({ tooltipOpen: !tooltipOpen })}>
          Open Popover
        </button>
        <GlobalTooltip active={tooltipOpen} timeout={1000} classNames="fade">
          <Tooltip />
        </GlobalTooltip>
      </div>
    );
  }

  state = {
    tooltipOpen: false
  };
}

export default App;
