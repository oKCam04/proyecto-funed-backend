'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asistencias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  asistencias.init({
    idEstudiante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'estudiantes',
          key: 'id'
        }
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false
      },
      asistio: {
        type: DataTypes.ENUM('Si', 'No'),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'asistencias',
  });
  return asistencias;
};