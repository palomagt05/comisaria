import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = () => {
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const toggleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  return (
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <div style={{ position: 'relative' }}>
        <Form.Control
          type={mostrarContrasena ? 'text' : 'password'}
          placeholder="Ingresa tu contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <FontAwesomeIcon
          icon={mostrarContrasena ? faEyeSlash : faEye}
          onClick={toggleMostrarContrasena}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        />
      </div>
    </Form.Group>
  );
};

export default PasswordInput;
