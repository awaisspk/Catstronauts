const { gql } = require("apollo-server");

// the fields of the Query type are entry points to the rest of the schema
const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track title"
    title: String!
    "the track main author"
    author: Author!
    "the track main illustration to display in track card or track page details"
    thumbnail: String
    "the track appromixate time to complete, in minutes"
    lenght: Int
    "the number of modules it contains"
    moduleCount: Int
  }
  "Author of complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
