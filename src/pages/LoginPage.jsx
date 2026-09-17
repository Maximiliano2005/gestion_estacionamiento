//react son cajas de memoria cada vez q hay un cambio se actualiza
import { useState } from 'react';
//los dos se usan para el bootstrap lo estico, para tarjetas y texto
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';

export function LoginPage() {
  const navigate = useNavigate();

  // para capturar la info que escribe el usuario
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  //función que se ejecuta al presionar ingresar 
  const iniciarSesion = (e) => {
    e.preventDefault(); //evita que la pagina se recargue sola

    // valida que no esten vacíos los campos
    if (!correo || !password) {
      alert('Por favor, ingresa correo y contraseña.');
      return;
    }

    //si escribio datos avanzamos al dashboard que es todo lo visual
    navigate('/dashboard');
  };

  //lo que aparece en pantalla 
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '400px' }} className="p-4 shadow-sm">
        <Card.Body>
          <h3 className="text-center mb-3">Iniciar Sesión</h3>
          <p className="text-center text-muted mb-4">Gestión de Estacionamientos</p>

          <Form onSubmit={iniciarSesion}>
            {/* Campo Correo */}
            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </Form.Group>

            {/* Campo Contraseña */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Botón de envío */}
            <Button variant="primary" type="submit" className="w-100 mt-2">
              Ingresar al Sistema
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}