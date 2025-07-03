'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asistencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      asistencia.belongsTo(models.cursoMatriculado, {
        foreignKey: 'idCursosMatriculados',
        as: 'cursoMatriculado'
      });
    }
  }
  asistencia.init({
    idCursosMatriculados: DataTypes.INTEGER,
    asistio: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'asistencia',
  });
  return asistencia;
};