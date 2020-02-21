'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Room = sequelize.define('Room', {
  //   name: DataTypes.STRING,
  //   players: DataTypes.JSON
  // }, {});
  const { Model } = sequelize.Sequelize;
  class Room extends Model { }
  Room.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 12]
        }
      }
    },
    players: {
      type: DataTypes.JSON,
      validate: {
        isLessThanEqualTwo(value) {
          if (Object.keys(value).length > 2) {
            throw new Error("Maximum player is 2");
          }
        }
      }
    }
  }, {
    sequelize
  })
  Room.associate = function (models) {
    // associations can be defined here
  };
  return Room;
};