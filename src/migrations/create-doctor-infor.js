'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctor_Infor', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            },
        doctorId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            },
        specialtyId: {
            type: Sequelize.INTEGER,
            },
        clinicId: {
            type: Sequelize.INTEGER,
            },
        priceId: {
            type: Sequelize.STRING,
            allowNull: false,
            },
        provinceId: {
            type: Sequelize.STRING,
            allowNull: false,
            },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        contentHTML: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
            },
        contentMarkdown: {
            type: Sequelize.TEXT('long'),
            },
        description: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
            }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctor_Infor');
  }
};