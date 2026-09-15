import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Layout } from './components/layout/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { Historial } from './pages/Historial';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LoginPage />} />


        <Route element={<Layout/>}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/historial' element={<Historial />} />
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;