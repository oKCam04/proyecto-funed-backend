'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notas', {
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
      idModulo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nota: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false
      },
      fechaNota: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estado: {
        type: Sequelize.ENUM('Aprobado','Reprobado'),
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
    await queryInterface.dropTable('notas');
  }
}; 