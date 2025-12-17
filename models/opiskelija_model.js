const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from Opiskelija', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from Opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into Opiskelija (nimi,laajuus) values(?,?)',
      [opiskelija.nimi, opiskelija.laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update Opiskelija set nimi=?,laajuus=? where idOpiskelija=?',
      [opiskelija.nimi, opiskelija.laajuus, id],
      callback
    );
  }
};
module.exports = opiskelija;