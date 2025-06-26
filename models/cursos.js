'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cursos.belongsTo(models.docentes,{
        foreignKey: 'idDocente',
        as: 'docentes'
      })
      
    }
  }
  cursos.init({
    idDocente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombreCurso: {
        type: DataTypes.STRING,
        allowNull: false
      },
      inicio: {
        type: DataTypes.DATE,
        allowNull: false
      },
      finalizacion: {
        type: DataTypes.DATE,
        allowNull: false
      },
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      temario: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      inscripcion: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      valorTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      grupo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipoCurso: {
        type: DataTypes.ENUM('Técnico','Corto'),
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'cursos',
  });
  return cursos;
};