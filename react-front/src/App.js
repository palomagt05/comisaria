import React from 'react';
import Login from './views/Login';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Login />
    </Container>
  );
}

export default App;
