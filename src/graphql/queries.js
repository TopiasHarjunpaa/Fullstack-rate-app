import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const AUTHENTICATE = gql`
  mutation authenticateUser($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const ME = gql`
  {
    me {
      id
      username
    }
  }
`;
