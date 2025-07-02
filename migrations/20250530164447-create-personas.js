'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numeroIdentificacion: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      tipoIdentificacion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaNacimiento: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false

      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rol: {
        type: Sequelize.ENUM('admin', 'usuario', 'docente'),
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
    await queryInterface.dropTable('personas');
  }
};