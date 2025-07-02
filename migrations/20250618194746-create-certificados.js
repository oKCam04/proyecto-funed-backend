'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('certificados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPersona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'personas',
          key: 'id' 
        }
      },

      fechaEmision: {
        type: DataTypes.STRING,
        allowNull: false
      },
      urlCertifcado: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('certificados');
  }
};