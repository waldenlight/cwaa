const { Client } = require('../models');

const resolvers = {
  Query: {
    client: async () => {
      return Client.find({});
    },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
  },
  Mutation: {
    // createClient: async (parent, args) => {
    //   const client = await Client.create(args);
    //   return client;
    // },
    // createVote: async (parent, { _id, clientNum }) => {
    //   const client = await Client.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`client${clientNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return client;
    // },
  },
};

module.exports = resolvers;
