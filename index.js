// Dotenv
const dotenv = require("dotenv");
dotenv.config();

// App

const express = require("express");
const app = express();


// Cors

const cors = require ('cors');
app.use(cors());


// MongoDB

const mongoose = require("mongoose");
const PORT = process.env.PORT || 5050;
const CONNECTION_URI = process.env.MONGODB_URI;
mongoose.connect(CONNECTION_URI, {useNewUrlParser:true,
useUnifiedTopology: true}).then(()=> {
    console.log(`mongoDb connected`);
    app.listen(PORT, ()=> {
        console.log(`Server started at ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
});