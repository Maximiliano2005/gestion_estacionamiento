import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export function LoginPage() {
  const navigate = useNavigate(); // Herramienta para cambiar de página

  const iniciarSesion = () => {
    // Aquí después validaremos el usuario y contraseña.
    // Por ahora, simplemente lo mandamos al Dashboard:
    navigate('/dashboard');
  };

  return (
    <Container className="mt-5 text-center">
      <h2>Pantalla de Login</h2>
      <p>Bienvenido, por favor inicia sesión.</p>
      <Button variant="primary" onClick={iniciarSesion}>
        Entrar al Sistema
      </Button>
    </Container>
  );
}