const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Coffee CRUD')
})

app.listen(port, () => {
    console.log(`You opend this one By ${port}`)
})