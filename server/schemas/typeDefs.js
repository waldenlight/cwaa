const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID!  
    clientId: Int!  
    writers: [String]  
    description: String!  
    name: String!  
    image: String!  
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!  
    username: String!  
    email: String!  
    assignedClients: [Client]  
  }

  type Query {
    users: [User]
    user(username: String!): User
    clients(username: String): [Client]
    client(clientId: ID!): Client
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
