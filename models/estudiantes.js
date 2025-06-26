'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudiantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  estudiantes.init({
    idPersona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'personas',
          key: 'id'
        }
      },
      idCurso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cursos',
          key: 'id'
        }
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
    modelName: 'estudiantes',
  });
  return estudiantes;
};