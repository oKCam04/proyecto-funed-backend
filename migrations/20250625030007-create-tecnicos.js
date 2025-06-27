'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tecnicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCurso: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reciboPublico: {
        type: Sequelize.STRING,
        allowNull: false
      },
      serologia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      certificadoEstudio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      foto3x4: {
        type: Sequelize.STRING,
        allowNull: false
      },
      certificadoEps: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tecnicos');
  }
}; 