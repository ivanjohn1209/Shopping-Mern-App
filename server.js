const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/Items');

const app = express();
//Bodyparser Middleware
app.use(bodyParser.json());


//DB Config
const {MONGOURI} = require('./config/keys');

//Connect to Mongo
mongoose.connect(MONGOURI,{
    useNewUrlParser: true, 
    useUnifiedTopology:true,
})
.then(()=> console.log("MONGO CONNECTED..."))
.catch(err => console.log(err));

 //Use Route
 app.use('/api/items', items);
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server running on ${port}`))




























//zUll33G1G13bUqg3
