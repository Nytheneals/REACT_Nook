const graphql = require("graphql");

// TO CREATE AN OBJECT
// PULL THE GraphQLObjectType METHOD FROM GRAPHQL
// THEN PASS IN THE TYPE OF DATA YOU WANT
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

// DUMMY DATA
const books = [
  { name: "Cougar", genre: "Romance", id: "1" },
  { name: "Power", genre: "Violence", id: "2" },
  { name: "Oiugi", genre: "Horror", id: "3" }
];

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
        resolve(parent, args) {
          //  code to get from db/ api
          const id = args.id;
          books.filter(function(book) {
            if (book.id === "id") {
              return true;
            }
          });
        }
      }
    },
    author: {
      type: AuthorType,
      args: {
        type: GraphQLString,
        resolve() {
          //  code to get from db/ api
          const id = args.id;
          const book = books.filter(book => book.id === id);
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
