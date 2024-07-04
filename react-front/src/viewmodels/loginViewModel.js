import { useState } from 'react';
import userModel from '../models/userModel';

const useLoginViewModel = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const data = await userModel.login(usuario, contrasena);
      localStorage.setItem('token', data.token);
      setMessage('Login successful');
    } catch (error) {
      setMessage(error);
    }
  };

  return {
    usuario,
    setUsuario,
    contrasena,
    setContrasena,
    message,
    handleLogin
  };
};

export default useLoginViewModel;
