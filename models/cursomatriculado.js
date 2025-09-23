'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso_matriculado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      curso_matriculado.belongsTo(models.curso, {
        foreignKey: 'idCurso',
        as: 'curso'
      });
      curso_matriculado.belongsTo(models.persona, {
        foreignKey: 'idPersona',
        as: 'persona'
      });
      curso_matriculado.hasMany(models.pago, {
        foreignKey: 'idCursosMatriculados',
        as: 'pagos'
      })
      curso_matriculado.hasMany(models.asistencia, {
        foreignKey: 'idCursosMatriculados',
        as: 'asistencias'
      });
      curso_matriculado.hasMany(models.certificado, {
        foreignKey: 'idCursoMatriculado',
        as: 'certificados'
      });
    }
  }
  cursoMatriculado.init({
    idCurso: DataTypes.INTEGER,
    idPersona: DataTypes.INTEGER,
    estado: DataTypes.ENUM('PreInscrito', 'Matriculado', 'Cancelado', 'Finalizado'),
    resultado: DataTypes.ENUM('Aprobado', 'Reprobado', 'Pendiente')
  }, {
    sequelize,
    modelName: 'cursoMatriculado',
  });
  return cursoMatriculado;
};