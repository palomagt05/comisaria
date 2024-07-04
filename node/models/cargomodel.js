const db = require('../config/db');

const cargoModel = {
  findById: (id, callback) => {
    const query = 'SELECT * FROM cargo WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results[0]);
    });
  }
};

module.exports = cargoModel;
