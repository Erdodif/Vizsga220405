import React from "react";
import Navbar from "./NavBar";
import Table from "./Table";
import Form from "./Form";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "table",
    };
  }

  changePage = (page) => {
    this.setState({ view: page });
  };

  render() {
    return (
      <div className="App">
        <Navbar page={this.state.view} changePage={this.changePage} />
        {this.state.view === "table" ? <Table /> : ""}
        {this.state.view === "form" ? <Form /> : ""}
      </div>
    );
  }
}

export default App;
