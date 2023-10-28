const seedUsers = require('./user-seeds');
const seedClients = require('./client-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedClients();
  console.log('\n----- CLIENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
