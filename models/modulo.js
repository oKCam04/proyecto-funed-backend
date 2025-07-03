'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      modulo.belongsTo(models.curso, {
        foreignKey: 'idCurso',
        as: 'curso'
      });

      modulo.hasMany(models.notaModulo, {
        foreignKey: 'idModulo',
        as: 'notasModulo'
      });
      modulo.hasMany(models.moduloDocente, {
        foreignKey: 'idModulo',
        as: 'modulosDocente'
      });
    }
  }
  modulo.init({
    nombre: DataTypes.STRING,
    idCurso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'modulo',
  });
  return modulo;
};