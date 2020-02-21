'use strict';
module.exports = (sequelize, DataTypes) => {
  // const { Model } = sequelize.Sequelize
  // class 
  const player = sequelize.define('player', {
    nama: DataTypes.STRING
  }, {});
  player.associate = function (models) {
    // associations can be defined here
  };
  return player;
};