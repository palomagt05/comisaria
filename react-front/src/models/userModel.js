import axios from 'axios';

const userModel = {
  login: async (usuario, contrasena) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { usuario, contrasena });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
};

export default userModel;
