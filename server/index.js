const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("coffeeDB");
    const coffee = database.collection("coffee");
    const users = database.collection("users");

    app.get('/coffees', async (req, res) => {
      const cursor = coffee.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffee.findOne(query);
      res.send(result)
    })

    app.post('/coffees', async (req, res) => {
      const getInfo = req.body;
      const result = await coffee.insertOne(getInfo);
      res.send(result)
    })

    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const updateCoffee = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffeeDoc = {
        $set: {
          coffeName: updateCoffee.coffeName,
          chef: updateCoffee.chef,
          supplier: updateCoffee.supplier,
          taste: updateCoffee.taste,
          category: updateCoffee.category,
          details: updateCoffee.details,
          photoURL: updateCoffee.photoURL
        }
      }
      const result = await coffee.updateOne(filter, updateCoffeeDoc, options);
      res.send(result)
    })

    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffee.deleteOne(query);
      res.send(result)
    })


    // Users Stuff for DataBase

    app.get('/users', async (req, res) => {
      const cursor = users.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await users.findOne(query);
      res.send(result)
    })

    app.post('/users', async (req, res) => {
      const userInfo = req.body;
      const result = await users.insertOne(userInfo);
      res.send(result)

    })

    app.patch('/users', async (req, res) => {
      const userBody = req.body;
      const filter = { email: userBody.email };
      const updatedDoc = {
        $set: {
          lastSignInTime: userBody.lastSignInTime
        }
      };

      const result = await users.updateOne(filter, updatedDoc);
      res.send(result)
    })

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await users.deleteOne(query);
      res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Coffee CRUD')
})

app.listen(port, () => {
  console.log(`You opend this one By ${port}`)
})