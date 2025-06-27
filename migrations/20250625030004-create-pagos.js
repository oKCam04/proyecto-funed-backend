'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pagos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEstudiante: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fechaPago: {
        type: Sequelize.DATE,
        allowNull: false
      },
      monto: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      metodoPago: {
        type: Sequelize.STRING,
        allowNull: false
      },
      financiamiento: {
        type: Sequelize.ENUM('Si','No'),
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
    await queryInterface.dropTable('pagos');
  }
}; 