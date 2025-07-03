'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ofertaCurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ofertaCurso.belongsTo(models.curso,{
        foreignKey: 'idCurso',
        as: 'curso'
      })
      ofertaCurso.belongsTo(models.docente,{
        foreignKey: 'idDocente',
        as: 'docente'
      })
      ofertaCurso.hasMany(models.inscripcion, {
        foreignKey: 'idOfertaCurso',
        as: 'inscripciones'
      });
    }
  }
  ofertaCurso.init({
    codigoCurso: DataTypes.INTEGER,
    idCurso: DataTypes.INTEGER,
    fechaInicioCurso: DataTypes.DATE,
    fechaFinCurso: DataTypes.DATE,
    horario: DataTypes.STRING,
    cupos: DataTypes.INTEGER,
    idDocente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ofertaCurso',
  });
  return ofertaCurso;
};