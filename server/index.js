const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017/local';

app.use(cors());
app.use(express.json());

app.get('/api/words', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = client.db().collection('test');
    const words = await collection
      .find()
      .sort({ "fréquence d'apparition": -1 })
      .limit(10)
      .toArray();

    res.send(words);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
