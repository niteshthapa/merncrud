const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const moongoose = require('mongoose');
dotenv.config()
app.use(bodyParser.json());
const cors = require('cors');
require("./models/Users");
app.use(cors());

//Routes Middlewear
app.use('/crud',require('./routes/simpleRoutes'))

//Connection with DB
moongoose.connect(process.env.DB_CONNECTION,
{useUnifiedTopology:true,useNewUrlParser: true},()=>{
    console.log("Connected to MongoDB")
})

const PORT = process.env.PORT || 4000;

//server static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(4000,()=>{
    console.log(`Server is running on port ${PORT}`)
})