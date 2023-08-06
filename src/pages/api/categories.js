const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hlzaati.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run(req, res) {
    try {
        await client.connect();
        const categoriesCollection = client.db("pc-builder").collection("categories");

        if (req.method === "GET") {
            const categories = await categoriesCollection.find({}).toArray();
            res.send({ message: "success", status: 200, data: categories });
        }

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default run;