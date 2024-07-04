const authViewModel = require('../viewmodels/authViewModel');

const authController = {
  login: (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
      return res.status(400).json({ message: 'Por favor, introduce ambos campos' });
    }

    authViewModel.login(usuario, contrasena, (err, token) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      return res.json({ token });
    });
  }
};

module.exports = authController;
