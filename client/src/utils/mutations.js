import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ASSIGN_CLIENT = gql`
  mutation assignClient($description: String!) {
    addComment(description: $description) {
      _id
      writers
      description
      title
      clientId
      image
      link
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_CLIENT = gql`
  mutation removeClient($clientId: ID!) {
    removeClient(clientId: $clientId) {
      _id
    }
  }
`;
