const { GraphQLClient, gql } = require('graphql-request');

// Define the GraphQL endpoint
// const endpoint = 'https://api.spacex.land/graphql/';
// const endpoint = 'https://rickandmortyapi.com/graphql';
const endpoint = 'https://countries.trevorblades.com/graphql';

// Create a new GraphQL client instance
const client = new GraphQLClient(endpoint);

// Define the query to fetch the latest SpaceX launch
const query = gql`
    query PiotrsQuery {
        countries {
            code
            name
            emoji
        }
    }
`;

const fetchLaunchData = async () => {
    try {
        const data = await client.request(query);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

module.exports = { fetchLaunchData };