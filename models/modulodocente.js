'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class moduloDocente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      moduloDocente.belongsTo(models.docente, {
        foreignKey: 'idDocente',
        as: 'docente'
      });
      moduloDocente.belongsTo(models.modulo, {
        foreignKey: 'idModulo',
        as: 'modulo'
      });
    }
  }
  moduloDocente.init({
    idModulo: DataTypes.INTEGER,
    idDocente: DataTypes.INTEGER,
    idCurosMatriculados: DataTypes.INTEGER,
    resultado: DataTypes.ENUM('Aprobado', 'Reprobado', 'Pendiente')
  }, {
    sequelize,
    modelName: 'moduloDocente',
  });
  return moduloDocente;
};