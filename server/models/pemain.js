'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Pemain extends Model { }
  Pemain.init({
    nama: DataTypes.STRING
  }, { sequelize })
  // const Pemain = sequelize.define('Pemain', {
  //   nama: DataTypes.STRING
  // }, {});
  Pemain.associate = function (models) {
    // associations can be defined here
  };
  return Pemain;
};