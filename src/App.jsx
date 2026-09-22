import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importacion de la carpeta componentes
import { Layout } from './components/layout/Layout';

// Importacion de la carpeta pages
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { Historial } from './pages/Historial';
import { Estacionamiento } from './pages/Estacionamiento';
import { Registrar} from './pages/Registrar';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LoginPage />} />


        <Route element={<Layout/>}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/estacionamiento' element={<Estacionamiento />} />
          <Route path='/historial' element={<Historial />} />
          <Route path='/registrar' element={<Registrar />} />
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;