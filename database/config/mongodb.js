const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://kumaryatendra4500:zgBABpQI52ay2knc@issue-tracker-cluster.oclrpcs.mongodb.net/?retryWrites=true&w=majority'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;
