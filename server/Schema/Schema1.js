const graphql = require("graphql");

// TO CREATE AN OBJECT
// PULL THE GraphQLObjectType METHOD FROM GRAPHQL
// THEN PASS IN THE TYPE OF DATA YOU WANT
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

// DUMMY DATA
const books = [
  { name: "Cougar", genre: "Romance", id: "1" },
  { name: "Power", genre: "Violence", id: "2" },
  { name: "Oiugi", genre: "Horror", id: "3" }
];

const authors = [
  { name: "Cougar", id: "18" },
  { name: "Power", id: "25" },
  { name: "Oiugi", id: "34" }
];

// DEFINING THE BOOK OBJECT TYPE
const BookType = new GraphQLObjectType({
  name: "Book", // THIS IS THE NAME OF THE OBJECT OR ENTRY POINT
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// DEFINING THE AUTHOR OBJECT TYPE
const AuthorType = new GraphQLObjectType({
  name: "Author", // THIS IS THE NAME OF THE OBJECT OR ENTRY POINT
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLID }
  })
});

// DEFINING THE ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        //  code to get from db/ api
        const id = args.id;
        return books.filter(book => (book.id === "id" ? true : false));
      }
    },
    Author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        //  code to get from db/ api
        const id = args.id;
        return authors.filter(book => (author.id === "id" ? true : false));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
