import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

export default function createGlobalComponent(rootNode = document.body) {
  return class GlobalComponent extends Component {
    render() {
      const { children, active, timeout, classNames } = this.props;

      return ReactDOM.createPortal(
        <CSSTransition in={active} timeout={timeout} classNames={classNames}>
          {children}
        </CSSTransition>,
        this.el
      );
    }

    componentDidMount() {
      rootNode.appendChild(this.el);
    }

    componentWillUnmount() {
      rootNode.removeChild(this.el);
    }

    el = document.createElement("div");
  };
}
