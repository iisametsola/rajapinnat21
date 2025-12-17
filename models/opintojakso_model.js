const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from Opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from Opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into Opintojakso (nimi,laajuus) values(?,?)',
      [opintojakso.nimi, opintojakso.laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update Opintojakso set nimi=?,laajuus=? where idOpintojakso=?',
      [opintojakso.nimi, opintojakso.laajuus, id],
      callback
    );
  }
};
module.exports = opintojakso;