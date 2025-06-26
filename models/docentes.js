'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class docentes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      docentes.hasMany(models.cursos, {
        foreignKey: 'idDocente',
        as: 'cursos'
      });

    }
  }
  docentes.init({
    idPersona: {
        type: DataTypes.INTEGER,
        allowNull: false
        
      },
      especialidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fechaContratacion:{
        type: DataTypes.DATE,
        allowNull: false

      },
      fechaTerminacion:{
        type: DataTypes.DATE,
        allowNull: true
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
    modelName: 'docentes',
  });
  return docentes;
};