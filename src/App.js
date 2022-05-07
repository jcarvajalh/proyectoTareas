import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CrearTarea from ' /src/CrearTarea.component';
import EditarTarea from ' /src/EditarTarea.component';
import ListaTareas from ' /src/ListaTareas.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Lista de Tareas USC</h2>

          <nav className="navbar navbar-exand-lg navbar-light bg-light">
            <link to="/" className="navbar-brand">
              Lista de tareas USC
            </link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <link to="/" className="nav-link">
                    Lista de tareas
                  </link>
                </li>
                <li className="navbar-item">
                  <link to="/" className="nav-link">
                    Crear lista de tareas
                  </link>
                </li>
                <li className="navbar-item">
                  <link to="/" className="nav-link">
                    Editar Lista de tareas
                  </link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={ListaTareas} />
          <Route path="/edit/:id" component={EditarTarea} />
          <Route path="/create" component={CrearTarea} />
        </div>
      </Router>
    );
  }
}

export default App;
