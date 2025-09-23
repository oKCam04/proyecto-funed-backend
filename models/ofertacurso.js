'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oferta_curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      oferta_curso.belongsTo(models.curso, {
        foreignKey: 'idCurso',
        as: 'curso'
      })
      oferta_curso.belongsTo(models.docente, {
        foreignKey: 'idDocente',
        as: 'docentes'
      })
      oferta_curso.hasMany(models.inscripcion, {
        foreignKey: 'idOfertaCurso',
        as: 'inscripciones'
      });
    }
  }
  oferta_curso.init({
    codigo_curso: DataTypes.INTEGER,
    id_curso: DataTypes.INTEGER,
    fecha_inicio_curso: DataTypes.DATE,
    fecha_fin_curso: DataTypes.DATE,
    horario: DataTypes.STRING,
    cupos: DataTypes.INTEGER,
    id_docente: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL(10, 2),
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ofertaCurso',
  });
  return ofertaCurso;
};