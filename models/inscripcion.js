'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inscripcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      inscripcion.belongsTo(models.persona,{
        foreignKey: 'personaInscrita',
        as: 'persona'
      })
      inscripcion.belongsTo(models.ofertaCurso, {
        foreignKey: 'idOfertaCurso',
        as: 'ofertaCurso'
      });
    }
  }
  inscripcion.init({
    id_oferta_curso: DataTypes.INTEGER,
    fecha_inicio_inscripcion: DataTypes.DATE,
    fecha_fin_inscripcion: DataTypes.DATE,
    persona_inscrita: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'inscripcion',
  });
  return inscripcion;
};