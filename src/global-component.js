import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

export default class GlobalComponent extends Component {
  render() {
    const { children, active, timeout, classNames, boundingBox } = this.props;
    const { dimensions } = this.state;

    return ReactDOM.createPortal(
      <CSSTransition in={active} timeout={timeout} classNames={classNames}>
        {children({ dimensions })}
      </CSSTransition>,
      this.el
    );
  }

  state = {
    dimensions: {}
  };

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { boundingBox } = nextProps;

    if (!boundingBox) {
      return {};
    }

    return {
      dimensions: {
        whatever: boundingBox.width * 2,
        whateverTwo: boundingBox.left * 5
      }
    };
  }

  el = document.createElement("div");
}
