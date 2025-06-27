'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tecnicos extends Model {
    static associate(models) {
      // define association here
    }
  }
  tecnicos.init({
    idCurso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reciboPublico: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serologia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certificadoEstudio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foto3x4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certificadoEps: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tecnicos',
  });
  return tecnicos;
}; 