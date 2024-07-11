import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IniciarSesion from './pages/IniciarSesion';
import Mascotas from './pages/Mascotas';
import registrarMascota from './pages/RegistrarMascotas';
import BuscarMascota from './pages/BuscarMascota';
import ActualizarMascotas from './pages/ActualizarMascota';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<IniciarSesion />} />
          <Route path="/listar" element={<Mascotas />} />
          <Route path="/editar/:id" element={<ActualizarMascotas />} />
          <Route path='/registrar' element={<registrarMascota/>}/>
          <Route path='/buscar/:id' element={<BuscarMascota/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
