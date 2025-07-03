'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cursoResultado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cursoResultado.belongsTo(models.cursoMatriculado, {
        foreignKey: 'idCursosMatriculados',
        as: 'cursoMatriculado'
      });
      cursoResultado.belongsTo(models.persona, {
        foreignKey: 'idPersona',
        as: 'persona'
      });
    }
  }
  cursoResultado.init({
    idCursosMatriculados: DataTypes.INTEGER,
    idPersona: DataTypes.INTEGER,
    resultado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cursoResultado',
  });
  return cursoResultado;
};