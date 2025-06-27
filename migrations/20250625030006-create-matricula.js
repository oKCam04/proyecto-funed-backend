'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matricula', {
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
      idCurso: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fechaMatricula: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fechaTerminacion: {
        type: Sequelize.DATE,
        allowNull: true
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      aprobado: {
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
    await queryInterface.dropTable('matricula');
  }
}; 