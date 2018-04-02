const graphql = require("graphql");

// TO CREATE AN OBJECT
// PULL THE GraphQLObjectType METHOD FROM GRAPHQL
// THEN PASS IN THE TYPE OF DATA YOU WANT
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

// DEFINING THE BOOK OBJECT TYPE
const BookType = new GraphQLObjectType({
  name: "Book", // THIS IS THE NAME OF THE OBJECT OR ENTRY POINT
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// DEFINING THE AUTHOR OBJECT TYPE
const AuthorType = new GraphQLObjectType({
  name: "Author", // THIS IS THE NAME OF THE OBJECT OR ENTRY POINT
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLString }
  })
});

// DEFINING THE ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        type: GraphQLString,
        resolve() {
          //  code to get from db/ api
        }
      }
    },
    author: {
      type: AuthorType,
      args: {
        type: GraphQLString,
        resolve() {
          //  code to get from db/ api
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
