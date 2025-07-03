'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notaModulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idModulo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'modulos', 
          key: 'id'
        }
      },
      idDocente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'docentes', 
          key: 'id'
        }
      },
      idCursoMatriculado: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursoMatriculados', 
          key: 'id'
        }
      },
      estado: {
        type: Sequelize.ENUM('Aprobado', 'Reprobado')
      },
      fecha: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('notaModulos');
  }
};