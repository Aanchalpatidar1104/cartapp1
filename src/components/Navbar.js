import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Cart
              </a>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
