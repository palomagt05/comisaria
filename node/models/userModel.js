const db = require('../config/db');

const userModel = {
  findByUsername: (usuario, callback) => {
    const query = 'SELECT * FROM users WHERE usuario = ?';
    db.query(query, [usuario], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results[0]);
    });
  }
};

module.exports = userModel;
