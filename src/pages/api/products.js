const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
        const productsCollection = client.db("pc-builder").collection("allProducts");

        if (req.method === "GET") {
            if (req.query.id) {
                const productId = req.query.id;
                const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
                if (!product) {
                    res.status(404).json({ message: "Product not found" });
                } else {
                    res.status(200).json({ message: "success", data: product });
                }
            } else {
                const products = await productsCollection.find({}).toArray();
                res.status(200).json({ message: "success", data: products });
            }
        }
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default run;