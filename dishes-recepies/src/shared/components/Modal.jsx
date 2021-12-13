import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

export default class Modal extends React.Component {
  constructor() {
    super();
    this.root = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    return ReactDOM.createPortal(<div className="modal">{this.props.children}</div>, this.root);
  }
}
