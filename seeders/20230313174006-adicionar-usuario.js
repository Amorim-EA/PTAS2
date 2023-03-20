'use strict';

/** @type {import('sequelize-cli').Migration} **/

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Erick Amorim'
      },
      
      {
        nome: 'Eder da Silva'
      },

      {
        nome: 'Luiz Piccolo'
      },

      {
        nome: 'João da Silva'
      },

      {
        nome: 'João Joe'
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
