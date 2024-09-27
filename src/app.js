// src/app.js
const express = require('express');
const staticRoutes = require('./routes/staticRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { graphqlHTTP } = require('express-graphql');
const { userSchema, postSchema } = require('./schemas');

const graphQLRoutes = require('./routes/graphQLRoutes');

const app = express();

app.use(express.json());

// Static pages
app.use(staticRoutes);

// API pages
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// graphQL server pages
app.use('/graphql/users', graphqlHTTP({
  schema: userSchema,
  rootValue: require('./resolvers/userResolver'),
  graphiql: true,
}));

app.use('/graphql/posts', graphqlHTTP({
  schema: postSchema,
  rootValue: require('./resolvers/postResolver'),
  graphiql: true,
}));

// graphQL client pages
app.use(graphQLRoutes);

module.exports = app;
