'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreCurso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duracion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      temario: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tipoCurso: {
        type: Sequelize.ENUM('Técnico','Corto'),
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
    await queryInterface.dropTable('cursos');
  }
};