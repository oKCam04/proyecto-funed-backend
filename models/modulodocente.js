'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modulo_docente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      modulo_docente.belongsTo(models.docente, {
        foreignKey: 'idDocente',
        as: 'docente'
      });
      modulo_docente.belongsTo(models.modulo, {
        foreignKey: 'idModulo',
        as: 'modulo'
      });
    }
  }
  modulo_docente.init({
    id_modulo: DataTypes.INTEGER,
    id_docente: DataTypes.INTEGER,
    id_cursos_matriculados: DataTypes.INTEGER,
    resultado: DataTypes.ENUM('Aprobado', 'Reprobado', 'Pendiente')
  }, {
    sequelize,
    modelName: 'moduloDocente',
  });
  return moduloDocente;
};