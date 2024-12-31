import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@fullstackblog-cluster.ctv4a.mongodb.net/?retryWrites=true&w=majority&appName=FullStackBlog-Cluster`);
    await client.connect();
    db = client.db('react-blog-db'); // use react-blog-db
    cb();
}

export {db, connectToDb};