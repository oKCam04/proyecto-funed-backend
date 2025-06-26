'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class certificados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  certificados.init({
    idEstudiante: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'estudiantes',
              key: 'id'
            }
    },
    fechaEmision: {
            type: DataTypes.STRING,
            allowNull: false
    },
          urlCertifcado: {
            type: DataTypes.STRING,
            allowNull: false
    
    }
  }, {
    sequelize,
    modelName: 'certificados',
  });
  return certificados;
};