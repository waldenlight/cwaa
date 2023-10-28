const { Client } = require('../models');

const clientData = [
  {
    client_name: 'Adam',
    description: "Lorem ipsum dolor sit",
  },
  {
    client_name: 'Chaniqua',
    description: "Lorem ipsum dolor sit",
  },
  {
    client_name: 'Ryan',
    description: "Lorem ipsum dolor sit",
  },
  {
    client_name: 'Bri',
    description: "Lorem ipsum dolor sit",
  },
  {
    client_name: 'Barry',
    description: "Lorem ipsum dolor sit",
  },
];

const seedClients = () => Client.bulkCreate(clientData);

module.exports = seedClients;
