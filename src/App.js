import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CrearTarea from './CrearTarea.component.js';
import EditarTarea from './EditarTarea.component.js';
import ListaTareas from './ListaTareas.component.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Lista de Tareas USC
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Lista de tareas
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Crear lista de tareas
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">
                    Editar lista de tareas
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" exact element={<ListaTareas />} />
            <Route path="/edit/:id" element={<EditarTarea />} />
            <Route path="/create" element={<CrearTarea />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
