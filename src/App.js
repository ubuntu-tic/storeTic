import React, { Component } from "react";
import "./App.css";
import MiComponente from "./components/MiComponente";
import Navbar from "./components/NavBar";
import Productos from "./components/Productos";


class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <h1 className="lead text-center">Bienvenidos a Cleaning Storetic</h1>
          <div>
            <Navbar />
          </div>
          <div>
            <MiComponente />
          </div>

          <div>
           
            <Productos />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
