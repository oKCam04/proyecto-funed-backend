'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('horarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idModulo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      diaSemana: {
        type: Sequelize.STRING,
        allowNull: false
      },
      horaInicio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      horaFin: {
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
    await queryInterface.dropTable('horarios');
  }
}; 