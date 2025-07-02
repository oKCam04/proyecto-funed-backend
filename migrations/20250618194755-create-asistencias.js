'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('asistencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPersonas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'personas', 
          key: 'id'
        }
      },
      fecha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      asistio: {
        type: Sequelize.ENUM('Si', 'No'),
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
    await queryInterface.dropTable('asistencias');
  }
};