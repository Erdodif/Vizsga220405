import React from "react";
import "./Navbar.scss"

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul>
          <li
            className={this.props.page === "table" ? "active" : "inactive"}
            onClick={() => this.props.changePage("table")}
          >
            Időpontok
          </li>
          <li
            className={this.props.page === "form" ? "active" : "inactive"}
            onClick={() => this.props.changePage("form")}
          >
            Új Időpont
          </li>
        </ul>
      </div>
    );
  }
}
