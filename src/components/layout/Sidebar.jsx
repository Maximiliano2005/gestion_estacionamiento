import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function Sidebar() {
    
    const ubication = useLocation();
    return (
        <div className="d-flex flex-column vh-100 p-3 bg-dark text-white" >
            <div>
                Logo
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