import React, { Component } from "react";
import "./App.css";
// import Form from "./components/Form";
// import Countries from "./components/Countries";

class App extends Component {
  state = {
    countries: [],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Country Search</h1>
        </header>
        <Form getCountry={this.getCountry} />
        <br />
        <Countries countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
