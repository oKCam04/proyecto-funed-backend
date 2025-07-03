'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class certificado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      certificado.belongsTo(models.persona, {
        foreignKey: 'idPersona',
        as: 'persona'
      });
    }
  }
  certificado.init({
    idPersona: DataTypes.INTEGER,
    fechaEmision: DataTypes.DATE,
    urlCertificado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'certificado',
  });
  return certificado;
};