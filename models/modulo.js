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
        foreignKey: 'id_curso',
        as: 'curso'
      });
      modulo.hasMany(models.modulodocente, {
        foreignKey: 'id_modulo',
        as: 'modulosDocente'
      });
    }
  }
  modulo.init({
    nombre: DataTypes.STRING,
    id_curso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'modulo',
    timestamps: false
  });
  return modulo;
};