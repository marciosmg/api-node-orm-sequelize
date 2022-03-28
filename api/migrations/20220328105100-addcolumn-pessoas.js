/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Pessoas', 'deletedAt')
  }
}