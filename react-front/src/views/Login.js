import React from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import useLoginViewModel from '../viewmodels/loginViewModel';
import PasswordInput from '../components/PasswordInput'; // Importa el componente PasswordInput

const Login = () => {
  const {
    usuario,
    setUsuario,
    contrasena,
    setContrasena,
    message,
    handleLogin
  } = useLoginViewModel();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container className="mt-5 custom-container">
      <h2 className="text-center">Login</h2>
      {message && <Alert variant={message === 'Login successful' ? 'success' : 'danger'}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>

        {/* Utiliza el componente PasswordInput aquí */}
        <PasswordInput
          contrasena={contrasena}
          setContrasena={setContrasena}
        />

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
