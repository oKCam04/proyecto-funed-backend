'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cursoMatriculado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cursoMatriculado.belongsTo(models.curso, {
        foreignKey: 'idCurso',
        as: 'curso'
      });
      cursoMatriculado.belongsTo(models.persona, {
        foreignKey: 'idPersona',
        as: 'persona'
      });
      cursoMatriculado.hasMany(models.cursoResultado, {
        foreignKey: 'idCursosMatriculados',
        as: 'resultados'
      });
      cursoMatriculado.hasMany(models.notaModulo, {
        foreignKey: 'idCursoMatriculado',
        as: 'notasModulo'
      })
      cursoMatriculado.hasMany(models.pago, {
        foreignKey: 'idCursosMatriculados',
        as: 'pagos'
      })
      cursoMatriculado.hasMany(models.asistencia, {
        foreignKey: 'idCursosMatriculados',
        as: 'asistencias'
      });
      cursoMatriculado.hasMany(models.moduloDocente,{
        foreignKey: 'idCurosMatriculados',
        as: 'modulosDocente'
      })
    }
  }
  cursoMatriculado.init({
    idCurso: DataTypes.INTEGER,
    idPersona: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cursoMatriculado',
  });
  return cursoMatriculado;
};