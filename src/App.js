import React, { Component, createRef } from "react";
import "./App.css";
import Tooltip from "./tooltip";
import GlobalComponent from "./global-component";

class App extends Component {
  render() {
    const { tooltipOpen, boundingBox } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Global Component Test Thing</h1>
        </header>
        <button ref={this.buttonRef} onClick={this.onClickBtn}>
          Open Popover
        </button>
        <GlobalComponent
          active={tooltipOpen}
          timeout={1000}
          classNames="fade"
          boundingBox={boundingBox}
        >
          {data => {
            console.log("got the data:", data);
            return <Tooltip />;
          }}
        </GlobalComponent>
      </div>
    );
  }

  state = {
    tooltipOpen: false
  };

  buttonRef = createRef();

  onClickBtn = () => {
    const { tooltipOpen } = this.state;

    if (!this.buttonRef.current) {
      return;
    }

    const boundingBox = this.buttonRef.current.getBoundingClientRect();

    const newState = {
      tooltipOpen: !tooltipOpen,
      boundingBox: {
        left: boundingBox.left,
        top: boundingBox.top,
        width: boundingBox.width
      }
    };

    this.setState(newState);
  };
}

export default App;
