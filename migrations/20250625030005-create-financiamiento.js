'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('financiamiento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPago: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cuotas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valorFinal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valorAbonado: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numeroCuota: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      estado: {
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
    await queryInterface.dropTable('financiamiento');
  }
}; 