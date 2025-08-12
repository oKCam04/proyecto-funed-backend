'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('moduloDocentes', {
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
      idCurosMatriculados: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursoMatriculados', 
          key: 'id'
        }
      },
      resultado:{
        type: Sequelize.ENUM('Aprobado','Reprobado','Pendiente'),defaultValue: 'Pendiente',
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
    await queryInterface.dropTable('moduloDocentes');
  }
};