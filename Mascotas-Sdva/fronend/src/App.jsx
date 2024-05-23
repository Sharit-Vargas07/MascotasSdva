import './App.css'
import ListarMascotas from './components/ListarMascotas.jsx'
import InicioSesion from './components/InicioSesion.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MascotasProvider } from './context/MascotasContext.jsx'
import ConsultarMascotas from './components/ConsultarMascotas.jsx'
import RegistrarMascota from './components/RegistrarMascotas.jsx'
import ActualizarMascotas from './components/ActualizarMascotas.jsx'

function App() {

  return (
    <>
       
    <MascotasProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/dashboard" element={<ListarMascotas />} />
        <Route path="/consultar/:id" element={<ConsultarMascotas />} />
        <Route path="/actualizar/:id" element={< ActualizarMascotas/>} />
        <Route path="/register" element={<RegistrarMascota />} />
      </Routes>

    </BrowserRouter>
    </MascotasProvider>
    </>
  )
}

export default App
