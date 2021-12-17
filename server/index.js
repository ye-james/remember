//imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');


//import routes
const todoRoutes = require('./routes/Todos')

//config
const app = express();
dotenv.config();

//middleware
app.use(bodyParser.json());
app.use(cors());


//Routes 
app.use('/todo', todoRoutes);



//connect to db
mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})