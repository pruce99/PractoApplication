const {Client } = require("pg");

const connectionString = "postgressql://postgres:super@localhost:5432/Doc"
const client = new Client({
    connectionString:connectionString
});

client.connect();

module.exports = client;

