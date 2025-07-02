'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Docentes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPersona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'personas', 
          key: 'id'
        },
      },
      especialidad: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaContratacion:{
        type: Sequelize.DATE,
        allowNull: false

      },
      fechaTerminacion:{
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('Docentes');
  }
};