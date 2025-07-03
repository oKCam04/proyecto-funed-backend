'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class costoCurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      costoCurso.belongsTo(models.curso, {
        foreignKey: 'idCursos',
        as: 'curso'
      });
    }
  }
  costoCurso.init({
    precioCop: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    idCursos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'costoCurso',
  });
  return costoCurso;
};