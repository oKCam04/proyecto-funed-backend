'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
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
      nombreUsuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      fechaCreacion:{
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('usuarios');
  }
};