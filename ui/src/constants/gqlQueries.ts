import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
query GetUsers {
    allUsers(count: 115) {
      id
      firstName
      lastName
      email
      avatar
    }
  }
`

export const POSTS_QUERY = gql`
query GetPosts {
    allPosts(count: 205) {
      id
      title
      body
      published
      createdAt
      author {
        id
        firstName
        lastName
        avatar
      }
    }
  }
`