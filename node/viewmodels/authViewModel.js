const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const authViewModel = {
  login: (usuario, contrasena, callback) => {
    userModel.findByUsername(usuario, (err, user) => {
      if (err) {
        return callback(err, null);
      }
      if (!user) {
        return callback('Usuario no encontrado', null);
      }

      bcrypt.compare(contrasena, user.contrasena, (err, isMatch) => {
        if (err) {
          return callback(err, null);
        }
        if (!isMatch) {
          return callback('Contraseña incorrecta', null);
        }

        const payload = {
          id: user.id,
          usuario: user.usuario,
          id_cargo: user.id_cargo
        };

        jwt.sign(payload, 'secretKey', { expiresIn: '1h' }, (err, token) => {
          if (err) {
            return callback(err, null);
          }
          return callback(null, token);
        });
      });
    });
  }
};

module.exports = authViewModel;
