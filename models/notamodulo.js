'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notaModulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      notaModulo.belongsTo(models.docente, {
        foreignKey: 'idDocente',
        as: 'docente'
      });
      notaModulo.belongsTo(models.cursoMatriculado, {
        foreignKey: 'idCursoMatriculado',
        as: 'cursoMatriculado'  
      });
      notaModulo.belongsTo(models.modulo, {
        foreignKey: 'idModulo',
        as: 'modulo'
      });
    }
  }
  notaModulo.init({
    idModulo: DataTypes.INTEGER,
    idDocente: DataTypes.INTEGER,
    idCursoMatriculado: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'notaModulo',
  });
  return notaModulo;
};