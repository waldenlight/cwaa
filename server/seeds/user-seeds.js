const { User } = require('../models');

const userData = [
  {
    username: 'John',
    email: 'john@gmail.com',
    password: 'pass'
  },
  {
    username: 'Bob',
    email: 'bob@gmail.com',
    password: 'pass'
  },
  {
    username: 'Carl',
    email: 'carl@gmail.com',
    password: 'pass'
  },
  {
    username: 'Kelly',
    email: 'kelly@gmail.com',
    password: 'pass'
  },
  {
    username: 'Sara',
    email: 'sara@gmail.com',
    password: 'pass'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
