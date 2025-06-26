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
      idDocente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'docentes', 
          key: 'id' 
        },
      },
      nombreCurso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      finalizacion: {
        type: Sequelize.DATE,
        allowNull: false
      },
      duracion: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      temario: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      inscripcion: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      valorTotal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      grupo: {
        type: Sequelize.STRING,
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