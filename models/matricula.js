'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matricula extends Model {
    static associate(models) {
      // define association here
    }
  }
  matricula.init({
    idEstudiante: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idCurso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fechaMatricula: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fechaTerminacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aprobado: {
      type: DataTypes.ENUM('Si','No'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'matricula',
  });
  return matricula;
}; 