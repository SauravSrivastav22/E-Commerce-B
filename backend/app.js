const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
const app = express();
const data = require('./products/p.json')
const port = process.env.PORT || 3000;
const path = require('path');
app.use(cors())
app.use(express.json());


app.get('/' , (req,res)=>{
    res.send(data)
    // res.send('joty')
})
app.use('/images' , express.static(path.join('images')))

app.use('/api' , require('./routes/api'))

app.listen(port ,()=>{
    console.log(`Server on port ${port}`);
})
