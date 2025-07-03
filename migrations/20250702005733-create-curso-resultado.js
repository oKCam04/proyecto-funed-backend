'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursoResultados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCursosMatriculados: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursoMatriculados', 
          key: 'id'
        }
      },
      idPersona: {
        type: Sequelize.INTEGER,
        references: {
          model: 'personas', 
          key: 'id'
        }
      },
      resultado: {
        type: Sequelize.ENUM('Aprobado', 'Reprobado', 'En Proceso')
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
    await queryInterface.dropTable('cursoResultados');
  }
};