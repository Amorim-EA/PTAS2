'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
     
      {
        nome: 'John',
        sobrenome:'Doe',
        idade: 20,
      },

      {
        nome: 'João',
        sobrenome:'da Silva',
        idade: 17,
      },


      {
        nome: 'Ademir',
        sobrenome:'da Silva',
        idade: 36,
      },


      {
        nome: 'Roberta',
        sobrenome:'da Silva',
        idade: 33,
      },


      {
        nome: 'John',
        sobrenome:'Doe',
        idade: 20,
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('pessoas', null, {});
  }
};
