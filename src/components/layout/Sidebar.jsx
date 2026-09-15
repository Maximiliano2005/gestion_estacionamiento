import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';


export function Sidebar() {
    
    const ubication = useLocation();
    return (
        <div className="d-flex flex-column vh-100 p-3 bg-dark text-white" >
            
            <div className='d-flex align-items-center mb-5 mt-2 px-2'>
                <img src={Logo} alt="Logo" style={{ width: '45px', borderRadius: '10px' }} />
                <div className='ms-3 text-white fw-bold' style={{ fontSize: '1.1rem', lineHeight: '1.2' }}>
                    <div>Gestión de</div>
                    <div>Estacionamiento</div>
                </div>
                
            </div>
            <div>
                <Nav className='flex-column gap-2 p-3' variant='pills'>
                    <Nav.Link active={ubication.pathname === '/dashboard'} className='text-white' as={Link} to={'/dashboard'}>Dashboard</Nav.Link>
                    <Nav.Link active={ubication.pathname === '/historial'} className='text-white' as={Link} to={'/historial'}>Historial</Nav.Link>
                </Nav>
            </div>
            <div className="mt-auto">
                Perfil
            </div>
        </div>
    );
}