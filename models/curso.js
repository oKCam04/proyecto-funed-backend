'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      curso.hasMany(models.ofertaCurso, {
        foreignKey: 'idCurso',
        as: 'ofertasCursos'
      });
      curso.hasMany(models.modulo,{
        foreignKey: 'idCurso',
        as: 'modulos'
      })
      curso.hasMany(models.cursoMatriculado, {
        foreignKey: 'idCurso',
        as: 'cursosMatriculados'
      });
      curso.hasMany(models.costoCurso, {
        foreignKey: 'idCursos',
        as: 'costoCursos'
      });
    }
  }
  curso.init({
    nombreCurso: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    temario: DataTypes.TEXT,
    tipoCurso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'curso',
  });
  return curso;
};