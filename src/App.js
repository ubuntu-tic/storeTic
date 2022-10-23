import React, { Component } from "react";
import "./App.css";
import MiComponente from "./components/MiComponente";
import Navbar from "./components/NavBar";
import Productos from "./components/Productos";
import TablaVentas from "./components/TablaVentas";

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <h1 className="lead text-center">Bienvenidos a Clean Storetic</h1>
          <div>
            <Navbar />
          </div>
          <div>
            {/* <TablaVentas /> */}
            <MiComponente />
          </div>

          <div>
            {/* <TablaVentas /> */}
            <Productos />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
