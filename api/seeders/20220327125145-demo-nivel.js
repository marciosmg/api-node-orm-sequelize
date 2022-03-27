module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Niveis', [
			{
				descr_nivel: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descr_nivel: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descr_nivel: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Niveis', null, {})
  }
}


/* Como esse arquivo era originalmente:

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     
  }
};

*/


