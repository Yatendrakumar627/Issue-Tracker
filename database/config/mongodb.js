const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;