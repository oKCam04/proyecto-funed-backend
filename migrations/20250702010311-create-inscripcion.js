'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inscripcions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idOfertaCurso: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ofertaCursos', 
          key: 'id'
        }
      },
      titulo: {
        type: Sequelize.INTEGER
      },
      ofertas: {
        type: Sequelize.TEXT
      },
      fechaInicioInscripcion: {
        type: Sequelize.DATE
      },
      fechaFinInscripcion: {
        type: Sequelize.DATE
      },
      personaInscrita: {
        type: Sequelize.INTEGER,
        references: {
          model: 'personas', 
          key: 'id'
        }
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
    await queryInterface.dropTable('inscripcions');
  }
};